import { User } from "@/models/User";
import { connect } from "@/utils/db";
import NextAuth from "next-auth/next";
import bcrypt from "bcryptjs";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Apple from "next-auth/providers/apple";

type newUser = any;

const handler = NextAuth({
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect();

        try {
          if (credentials) {
            const user = await User.findOne({
              email: credentials.email,
            });
            if (user) {
              const isPasswordCorrect = await bcrypt.compare(
                credentials.password,
                user.password
              );
              if (isPasswordCorrect) {
                return { user };
              } else {
                throw new Error("Wrong credentials!");
              }
            } else {
              throw new Error("User Not Found!");
            }
          }
        } catch (error) {
          throw new Error("Something went wrong");
        }
      },
    }),
    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Apple({
      clientId: process.env.APPLE_CLIENT_ID as string,
      clientSecret: process.env.APPLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    error: "/auth/register",
  },
});

export { handler as GET, handler as POST };
