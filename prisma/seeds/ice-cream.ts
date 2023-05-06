import { type PrismaClient } from '@prisma/client';

export async function createIceCreams(client: PrismaClient): Promise<void> {
  const iceCreamProductType = await client.productType.create({
    data: {
      name: 'ice-cream',
    },
  });
}
