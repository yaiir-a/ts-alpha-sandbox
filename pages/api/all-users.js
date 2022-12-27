import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const allUsers = await prisma.users.findMany();

  res.status(200).json(allUsers);
}
