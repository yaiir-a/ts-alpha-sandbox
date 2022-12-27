import { PrismaClient } from "@prisma/client";
import { log } from "console";
import { redirect } from "next/dist/server/api-utils";
var crypto = require("crypto");

const prisma = new PrismaClient();

BigInt.prototype.toJSON = function () {
  return this.toString();
};

export default async function handler(req, res) {
  var my_data;
  if (!req.body) {
    console.log("no data");
    my_data = {
      email: `${crypto.randomBytes(5).toString("hex")}@example.com`,
    };
  } else {
    console.log("data found", req.body);
    my_data = {
      email: req.body.email,
    };
  }

  const newUser = await prisma.users.create({
    data: my_data,
  });
  console.log(newUser);
  res.status(200).json(newUser);
}
