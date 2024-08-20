import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const role = auth?.user.role;
      const isOnAdmin = nextUrl.pathname.startsWith("/admin");
      const isOnEmployee = nextUrl.pathname.startsWith("/employee");
      const isOnLogin = nextUrl.pathname.startsWith("/login");

      if (isOnLogin) {
        if (role == "admin") {
          return Response.redirect(new URL("/admin", nextUrl));
        } else if (role === "employee") {
          return Response.redirect(new URL("/employee", nextUrl));
        }
      } else if (isOnAdmin) {
        if (isLoggedIn && role === "admin") return true;
        else if (isLoggedIn && role === "employee")
          return Response.redirect(new URL("/employee", nextUrl));

        return false;
        //} // Redirect unauthenticated users to login page
      } else if (isOnEmployee) {
        if (isLoggedIn && role === "employee") return true;
        else if (isOnEmployee && role === "admin")
          return Response.redirect(new URL("/admin", nextUrl));
        return false;
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        console.log("tn", token, user);
        token.role = user.role;
        token.uid = user.uid;
      }
      return token;
    },
    async session({ session, token }) {
      console.log("session", session, token);
      if (session?.user) {
        session.user.uid = token.uid;
        session.user.role = token.role;
      }
      console.log("sessionafter", session);
      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
