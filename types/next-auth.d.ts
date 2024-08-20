import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      uid: number;
      role: string;
    } & DefaultSession;
  }

  interface User extends DefaultUser {
    uid: number;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    uid: number;
    role: string;
  }
}
