import { getServerSession } from "next-auth";
import { authOptoins } from "../api/auth/[...nextauth]/route";

export default async function getSession() {
  return await getServerSession(authOptoins);
}
