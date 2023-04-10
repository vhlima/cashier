import { type Product, type Prisma, type PrismaClient } from '@prisma/client';

import {
  createProduct,
  createProductOption,
  createProductVariant,
} from './index';

export async function createBurgers(client: PrismaClient): Promise<void> {
  const burgerProductType = await client.productType.create({
    data: {
      displayName: 'Burger',
    },
  });

  const extrasProductOption = await createProductOption(
    client,
    burgerProductType.id,
    {
      name: 'Extras',
      minOptions: 0,
      maxOptions: 10,
    },
  );

  const burger = await createBurger(client, burgerProductType.id, {
    name: 'Big Mac',
    imageUrl: '',
    price: 0,
  });

  await createProductVariant(client, extrasProductOption.id, {
    name: 'Bacon',
    price: 1,
    product: {
      connect: {
        id: burger.id,
      },
    },
  });
}

async function createBurger(
  client: PrismaClient,
  productTypeId: string,
  input: Omit<Prisma.ProductCreateInput, 'productType'>,
): Promise<Product> {
  const product = await createProduct(client, {
    ...input,
    productType: {
      connect: {
        id: productTypeId,
      },
    },
  });

  return product;
}
