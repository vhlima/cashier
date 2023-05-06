import {
  type ProductOption,
  type Prisma,
  type PrismaClient,
} from '@prisma/client';

import { createProductOption, createProductVariant } from './index';

import { faker } from '@faker-js/faker';

async function createProductOptions(
  client: PrismaClient,
  productId: string,
  options: Array<Omit<Prisma.ProductOptionCreateInput, 'product'>>,
): Promise<ProductOption[]> {
  const productOptionsPromises = options.map(option =>
    createProductOption(client, {
      product: {
        connect: {
          id: productId,
        },
      },
      ...option,
    }),
  );

  const productOptions = await Promise.all(productOptionsPromises);

  return productOptions;
}

async function createProductVariants(
  client: PrismaClient,
  productOptionId: string,
  options: Omit<Prisma.ProductVariantCreateInput, 'productOption'>[],
): Promise<void> {
  const productVariantsPromise = options.map(option =>
    createProductVariant(client, productOptionId, option),
  );

  await Promise.all(productVariantsPromise);
}

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

  const productOptionsPromise = fakeBurgers.map(burger =>
    createProductOptions(client, burger.id, [
      {
        name: 'Sauce',
        minOptions: 1,
        maxOptions: 1,
      },
      {
        name: 'Extras',
        minOptions: 0,
        maxOptions: 5,
      },
    ]),
  );

  const productOptions = (await Promise.all(productOptionsPromise)).flat();

  const fakeBurgersVariants = productOptions.map(option =>
    createProductVariants(
      client,
      option.id,
      Array.from({ length: 4 }).map(() => ({
        name: faker.commerce.product(),
        price: faker.datatype.number(),
        description:
          faker.datatype.number({ min: 1, max: 2 }) === 1
            ? faker.commerce.productDescription()
            : undefined,
      })),
    ),
  );

  await Promise.all(fakeBurgersVariants);
}
