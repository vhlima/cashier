import { PrismaClient } from '@prisma/client';

import { createBurgers, createIceCreams, createStoreCategories } from './seeds';

const client = new PrismaClient();

async function main() {
  console.log('[Seed] Starting seeding.');

  await createBurgers(client);
  await createIceCreams(client);
  await createStoreCategories(client);

  console.log('[Seed] Seeding completed.');
}

main()
  .then(async () => {
    await client.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await client.$disconnect();
    process.exit(1);
  });
