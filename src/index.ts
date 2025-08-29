import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.userDetail.create({
    data: {
      username: "Kriti",
      email: "kriti@example.com",
      password: "securepassword123",
      role: "customer",
      gender: "female",
    },
  });

  console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
