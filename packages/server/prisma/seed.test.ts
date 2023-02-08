import { PrismaClient } from '@prisma/server-db';
const prisma = new PrismaClient();

async function main() {
  const email = 'bob@bob.gmail.com';
  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      id: '1',
      email,
      name: 'Bob Bobberson',
      image: 'https://source.unsplash.com/random/200x200',
      emailVerified: new Date(),
      sessions: {
        create: {
          id: 'session-1',
          expires: new Date(),
          sessionToken: 'session-token-1',
        },
      },
      accounts: {
        create: {
          id: 'account-1',
          type: 'personal',
          provider: 'github',
          providerAccountId: 'github-1',
          scope: 'user',
          id_token: 'id-token-1',
          expires_at: 1000,
          token_type: 'token-type-1',
          access_token: 'access-token-1',
          refresh_token: 'refresh-token-1',
          session_state: 'session-state-1',
        },
      },
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (err: Error) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
