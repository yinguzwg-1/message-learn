import NextAuth from "next-auth";
import { authOptoins } from "@/app/libs/authOption";

const handler = NextAuth(authOptoins);

export { handler as GET, handler as POST };
