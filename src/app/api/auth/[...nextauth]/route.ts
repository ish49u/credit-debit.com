import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";


// Determine the correct NEXTAUTH_URL
const NEXTAUTH_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://credit-debitcom.vercel.app";
// Define authentication options
const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

// Correctly export API route handlers
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
