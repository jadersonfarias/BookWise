import { prisma } from "@/lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react"; // Pega a sessão do NextAuth

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {  // apenas get
        return res.status(405).end();
      }

      const session = await getSession({ req }); // pega requisão session

      if (!session) {
          return res.status(401).json({message: "Usuário não autenticado"})
        }
        
      const userId = session.user.id;
     
    
      const userBooks = await prisma.rating.findMany({
        where: {
            user_id: userId,
        },
        orderBy: {
          created_at: 'desc'
        },
        include: {
            book: true
        }
     })
    return res.status(200).json(userBooks);
}