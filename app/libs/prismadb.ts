import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}
const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  // @ts-ignore
  globalThis.prsima = client;
}

export default client;
