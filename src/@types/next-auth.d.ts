import NextAuth from "next-auth";

declare module "next-auth" {
  // mudando a tipagem para se adptar ao meu adptor
  export interface User {
    id: string;
    name: string | null;
    email: string | null;
    avatar_url: string | null;  
  }

  interface Session {
    user: User;
  }
}
