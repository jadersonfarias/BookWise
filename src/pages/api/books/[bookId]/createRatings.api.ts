import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api';
import * as zod from 'zod';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  const authOptions = buildNextAuthOptions();
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: 'Usuário não autenticado.' });
  }

  try {
    const bookId = String(req.query.bookId);
    const userEmail = String(session.user?.email);

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    const userId = user.id;

    const bodySchema = zod.object({
      description: zod.string().max(450, 'A descrição pode ter no máximo 450 caracteres.'),
      rate: zod.number().min(1, 'A avaliação mínima é 1.').max(5, 'A avaliação máxima é 5.'),
    });

    const { description, rate } = bodySchema.parse(req.body);

    const userAlreadyRated = await prisma.rating.findFirst({
      where: {
        user_id: userId,
        book_id: bookId,
      },
    });

    if (userAlreadyRated) {
        return res.status(409).end()
    }

    await prisma.rating.create({
      data: {
        book_id: bookId,
        description,
        rate,
        user_id: userId,
      },
    });

    return res.status(201).json({ message: 'Avaliação criada com sucesso.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
}