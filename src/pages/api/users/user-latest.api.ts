import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import  { buildNextAuthOptions } from "../auth/[...nextauth].api";
import { prisma } from "@/lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){

  if(req.method !== 'GET'){
    return res.status(405).end()
  }

  const authOptions = buildNextAuthOptions();
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).end()
  }

  const userEmail = String(session?.user?.email)
  const user = await prisma.user.findUnique({ //pega  com base no email
    where: {
      email: userEmail,
    },
  })

  if (!user) {
    return res.status(404).json({
      error: 'User not found',
    })
  }

  const userId = user.id

  const latestUserReview = await prisma.rating.findFirst({
    where: {
      user_id: userId,
    },
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: true,
    },
  })
  
  return res.json({ review: { ...latestUserReview } })
}