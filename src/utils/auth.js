import NextAuth from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";

import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import prisma from "./connect";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    GitHub,
  ],

});