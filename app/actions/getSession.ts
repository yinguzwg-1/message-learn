import { getServerSession } from "next-auth";
import { authOptoins } from "@/app/libs/authOption";

export default async function getSession() {
  return await getServerSession(authOptoins);
}
