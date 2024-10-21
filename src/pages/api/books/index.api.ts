// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }


  try {
    // Filtro de ratings com ordenação por data de criação (mais recente primeiro)
    const ratings = await prisma.rating.findMany({
      include: {
        book: true, // Inclui detalhes do livro associado à avaliação
        user: true
      },
      orderBy: {
        created_at: 'desc', // Ordena pela data de criação, do mais recente para o mais antigo
      },
    });

    return res.status(200).json(ratings);
  } catch (error) {
    console.error('Error fetching ratings:', error);
    return res.status(500).json({ message: 'Error fetching ratings' });
  }
}

