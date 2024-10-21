import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

// /api/books

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }
  const categoryId = req.query.category as string

  const books = await prisma.book.findMany({
    where: {
      categories: {
        some: {
          categoryId,
        },
      },
    },
    include: {
      ratings: true,
    },
  })

  const booksWithAvgRating = books.map((book) => {
    const totalRatings = book.ratings.length
    const avgRating =
      totalRatings > 0
        ? book.ratings.reduce((sum, rating) => sum + rating.rate, 0) / totalRatings
        : 0

        return {
          ...book,
          avgRating, // Adiciona a média ao objeto
        }
      })

  return res.json({ books: booksWithAvgRating })
}