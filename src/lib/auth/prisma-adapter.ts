import { Adapter } from 'next-auth/adapters'
import { prisma } from '../prisma'
//import { NextApiRequest, NextApiResponse, NextPageContext } from 'next'

interface Account {
  userId: string; // ID do usuário associado
  type: string; // Tipo de conta, se aplicável
  provider: string; // Provedor de autenticação
  providerAccountId: string; // ID da conta do provedor
  refresh_token?: string; // Token de atualização, se aplicável
  access_token?: string; // Token de acesso, se aplicável
  expires_at?: number | null ; // Data de expiração do token
  token_type?: string | null; // Tipo de token, se aplicável
  scope?: string | null; // Escopo da autenticação, se aplicável
  id_token?: string | null; // Token de ID, se aplicável
  session_state?: string | null; // Estado da sessão, se aplicável
}

interface User {
  id: string; // ID único do usuário
  name: string | null // Nome do usuário (opcional e pode ser nulo)
  avatar_url: string | null; // URL do avatar (opcional e pode ser nulo)
  created_at: Date; // Data de criação do usuário
  email?: string; // Email do usuário (opcional e deve ser único)
  emailVerified?: Date | null; // Data de verificação do email (opcional e pode ser nulo)
}

export function PrismaAdapter(): Adapter {
  return {
    async createUser(user: User) {
      const rawUser = await prisma.user.create({
        data: {
          name: user.name,
          avatar_url: user.avatar_url,
          email: user.email,
        },
      })

      const formattedUser = {
        id: rawUser.id,
        name: rawUser.name,
        avatar_url: rawUser.avatar_url!,
        email: rawUser.email!,
        emailVerified: null,
      }

      return formattedUser
    },

    async getUser(id) {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      })

      if (!user) {
        return null
      }

      return {
        id: user.id,
        name: user.name ?? '',
        email: user.email!,
        emailVerified: null,
        avatar_url: user.avatar_url!,
      }
    },

    async getUserByEmail(email) {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (!user) {
        return null
      }

      return {
        id: user.id,
        name: user.name ?? '',
        email: user.email!,
        emailVerified: null,
        avatar_url: user.avatar_url!,
      }
    },

    async getUserByAccount({ providerAccountId, provider }) {
      const account = await prisma.account.findUnique({
        where: {
          provider_provider_account_id: {
            provider,
            provider_account_id: providerAccountId,
          },
        },
        include: {
          user: true,
        },
      })

      if (!account) {
        return null
      }

      const { user } = account

      return {
        id: user?.id,
        name: user.name ?? '',
        email: user.email!,
        emailVerified: null,
        avatar_url: user.avatar_url!,
      }
    },

    async updateUser(user) {
      const updatedUser = await prisma.user.update({
        where: {
          id: user.id!,
        },
        data: {
          name: user.name!,
          email: user.email,
          avatar_url: user.image!,
        },
      })

      return {
        id: updatedUser.id,
        name: updatedUser.name ?? '',
        email: updatedUser.email!,
        emailVerified: null,
        avatar_url: updatedUser.avatar_url!,
      }
    },

    async linkAccount(account: Account) {
      await prisma.account.create({ 
        data: {
          user_id: account.userId,
          type: account?.type,
          provider: account.provider,
          provider_account_id: account.providerAccountId,
          refresh_token: account.refresh_token,
          access_token: account.access_token,
          expires_at: account?.expires_at,
          token_type: account.token_type,
          scope: account.scope,
          id_token: account.id_token,
          session_state: account.session_state,
        },
      })
    },

    async createSession({ sessionToken, userId, expires }) {
      await prisma.session.create({
        data: {
          session_token: sessionToken,
          user_id: userId,
          expires,
        },
      })

      return {
        sessionToken,
        userId,
        expires,
      }
    },

    async getSessionAndUser(sessionToken) {
      const prismaSession = await prisma.session.findUnique({
        where: {
          session_token: sessionToken,
        },
        include: {
          user: true,
        },
      })

      if (!prismaSession) {
        return null
      }

      const { user, ...session } = prismaSession

      return {
        session: {
          userId: session.user_id,
          expires: session.expires,
          sessionToken: session.session_token,
        },
        user: {
          id: user.id,
          name: user.name ?? '',
          email: user.email!,
          emailVerified: null,
          avatar_url: user.avatar_url!,
        },
      }
    },

    async updateSession({ sessionToken, userId, expires }) {
      const updatedSession = await prisma.session.update({
        where: {
          session_token: sessionToken,
        },
        data: {
          expires,
          user_id: userId,
        },
      })

      return {
        sessionToken: updatedSession.session_token,
        userId: updatedSession.user_id,
        expires: updatedSession.expires,
      }
    },

    async deleteSession(sessionToken) {
      await prisma.session.delete({
        where: {
          session_token: sessionToken,
        },
      })
    },
  }
}