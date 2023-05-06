import {
  type PrismaClient,
  type Prisma,
  type Product,
  type ProductOption,
} from '@prisma/client';

export const productTypes: Prisma.ProductTypeCreateInput[] = [
  {
    name: 'burger',
  },
  {
    name: 'pizza',
  },
  {
    name: 'snack',
  },
  {
    name: 'soft-drink',
  },
  {
    name: 'coffee',
  },
  {
    name: 'ice-cream',
  },
];

export async function createProduct(
  client: PrismaClient,
  input: Prisma.ProductCreateInput,
): Promise<Product> {
  return client.product.create({
    data: input,
  });
}

export async function createProductOption(
  client: PrismaClient,
  input: Omit<Prisma.ProductOptionCreateInput, 'productType'>,
): Promise<ProductOption> {
  const productOption = client.productOption.create({
    data: input,
  });

  return productOption;
}

export async function createProductVariant(
  client: PrismaClient,
  productOptionId: string,
  input: Omit<Prisma.ProductVariantCreateInput, 'productOption'>,
): Promise<void> {
  await client.productVariant.create({
    data: {
      ...input,
      productOption: {
        connect: {
          id: productOptionId,
        },
      },
    },
  });
}
