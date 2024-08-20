import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { client } from "./app/database/config";
import { User } from "./lib/definitions";

async function getUser(email: string): Promise<User | undefined> {
  try {
    const stmnt = `SELECT * FROM Users WHERE email = $1`;
    const user = await client.query(stmnt, [email]);
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user: ", error);
    throw new Error("Failed to fetch user");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(8),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          if (!user) return null;
          const passwordMatch = password === user.password;

          if (passwordMatch) {
            return user;
          }
        }
        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});
