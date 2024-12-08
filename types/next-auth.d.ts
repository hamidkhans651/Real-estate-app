// types/next-auth.d.ts
import NextAuth from "next-auth";
import { User } from "next-auth";
import { DefaultSession } from "next-auth";

// Extending the default session type
declare module "next-auth" {
  interface Session {
    user: {
      id: number;
      username: string;
      email: string;
      isVerified: boolean;
      isAdmin: boolean;
    } & DefaultSession["user"];
  }

  interface User {
    id: number;
    username: string;
    email: string;
    isVerified: boolean;
    isAdmin: boolean;
  }
}
