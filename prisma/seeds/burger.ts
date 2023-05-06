import { type PrismaClient } from '@prisma/client';

import { createProductOption, createProductVariant } from './index';

import { faker } from '@faker-js/faker';

export async function createBurgers(client: PrismaClient): Promise<void> {
  const burgerProductType = await client.productType.create({
    data: {
      name: 'burger',
    },
  });

  const fakeBurgersPromise = Array.from({ length: 2 }).map(() => {
    return client.product.create({
      data: {
        name: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        imageUrl:
          'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXCTbnv/200/200/original?country=br',
        price: faker.datatype.number(),
        productType: {
          connect: {
            id: burgerProductType.id,
          },
        },
      },
    });
  });

  const fakeBurgers = await Promise.all(fakeBurgersPromise);

  const productOptionsPromises = fakeBurgers.map(burger =>
    createProductOption(client, burgerProductType.id, {
      name: 'Extras',
      product: {
        connect: {
          id: burger.id,
        },
      },
      minOptions: 0,
      maxOptions: 5,
    }),
  );

  const productOptions = await Promise.all(productOptionsPromises);

  const fakeBurgersVariants = productOptions.map(option =>
    createProductVariant(client, option.id, {
      name: faker.commerce.product(),
      price: faker.datatype.number(),
      description:
        faker.datatype.number({ min: 1, max: 2 }) === 1
          ? faker.commerce.productDescription()
          : undefined,
    }),
  );

  await Promise.all(fakeBurgersVariants);
}
