import { type PrismaClient } from '@prisma/client';

export async function createStoreCategories(client: PrismaClient) {
  await client.storeCategory.createMany({
    data: [
      {
        name: 'Home',
        routeName: '/',
      },
      {
        name: 'Restaurants',
        routeName: '/restaurants',
      },
      {
        name: 'Markets',
        routeName: '/markets',
      },
      {
        name: 'Drinks',
        routeName: '/drinks',
      },
      {
        name: 'Pharma',
        routeName: '/pharma',
      },
    ],
  });
}
