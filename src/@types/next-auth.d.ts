import NextAuth from "next-auth";

declare module "next-auth" {
  // mudando a tipagem para se adpitar ao meu adptor
  export interface User {
    id: string;
    name: string;
    email: string | null;
    avatar_url: string | null;  
  }

  interface Session {
    user: User;
  }
}
