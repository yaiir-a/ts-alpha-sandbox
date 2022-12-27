import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

BigInt.prototype.toJSON = function () {
  return this.toString();
};

export default async function handler(req, res) {
  console.log(process.env.DATABASE_URL);
  const allUsers = await prisma.users.findMany();

  res.status(200).json(allUsers);
}
