import {
  type PrismaClient,
  type Prisma,
  type Product,
  type ProductOption,
} from '@prisma/client';

export const productTypes: Prisma.ProductTypeCreateInput[] = [
  {
    displayName: 'Burger',
  },
  {
    displayName: 'Pizza',
  },
  {
    displayName: 'Snack',
  },
  {
    displayName: 'Soft Drink',
  },
  {
    displayName: 'Coffee',
  },
  {
    displayName: 'Ice Cream',
  },
];

export async function createProduct(
  client: PrismaClient,
  input: Prisma.ProductCreateInput,
): Promise<Product> {
  const { name, price, imageUrl, productType } = input;

  const product = await client.product.create({
    data: {
      name,
      price,
      imageUrl,
      productType,
    },
  });

  return product;
}

export async function createProductOption(
  client: PrismaClient,
  productTypeId: string,
  input: Omit<Prisma.ProductOptionCreateInput, 'productType'>,
): Promise<ProductOption> {
  const productOption = await client.productOption.create({
    data: {
      ...input,
      productType: {
        connect: {
          id: productTypeId,
        },
      },
    },
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
