import { prisma } from '@/lib/prisma'
import { getMostFrequentString } from '@/utils/get-most-frequent-string'
import { NextApiRequest, NextApiResponse } from 'next'

// /api/users?userEmail=example@teste.com

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { userEmail, userId } = req.query

  if (userEmail) {
    const userByEmail = await prisma.user.findUnique({
      where: {
        email: String(userEmail),
      },
    })

    return res.json({ user: userByEmail })
  }

  if (userId) {
    const userById = await prisma.user.findUnique({
      where: {
        id: String(userId),
      },
      include: {
        Rating: {
          include: {
            book: {
              include: {
                categories: {
                  include: {
                    category: true,
                  },
                },
              },
            },
          },
          orderBy: {
            created_at: 'desc',
          },
        },
      },
    })

    const readPages = userById?.Rating
  ? userById?.Rating.reduce((acc, rating) => acc + rating.book.total_pages, 0)
  : 0;


    const ratedBooks = userById?.Rating.length
    
    const readAuthors = userById?.Rating
      ? userById?.Rating.reduce((acc, rating) => {
          if (!acc.includes(rating.book.author)) {
            acc.push(rating.book.author)
          }
          return acc
        }, [] as string[])
      : []

    const categories = userById?.Rating.flatMap((rating) =>
      rating.book.categories.flatMap((category) => category.category.name),
    )
    const mostReadCategory = categories && getMostFrequentString(categories)

    const profileData = {
      user: {
        ...userById,
      },
      Rating: userById?.Rating,
      readPages,
      ratedBooks,
      readAuthors: readAuthors?.length,
      mostReadCategory,
    }

    return res.json({ user: profileData })
  }

  return res.status(400).json({ error: 'Invalid parameters' })
}