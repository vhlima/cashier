import { vi } from 'vitest';

import { faker } from '@faker-js/faker';

import {
  type ShoppingCartOptionVariant,
  type ShoppingCartProduct,
  type ShoppingCartProductOptions,
} from '@/hooks';

function mockShoppingCartVariant(): ShoppingCartOptionVariant {
  return {
    variantId: faker.datatype.uuid(),
    quantity: faker.datatype.number(),
  };
}

function mockShoppingCartOptions(): ShoppingCartProductOptions {
  return Array.from({
    length: faker.datatype.number({ min: 1, max: 10 }),
  }).reduce(
    (agg: ShoppingCartProductOptions) => ({
      ...agg,
      [faker.datatype.uuid()]: Array.from({
        length: faker.datatype.number({ min: 1, max: 10 }),
      }).map(() => mockShoppingCartVariant()),
    }),
    {},
  );
}

function mockShoppingCartProduct(): ShoppingCartProduct {
  return {
    productId: faker.datatype.uuid(),
    options: mockShoppingCartOptions(),
    quantity: faker.datatype.number({ min: 1, max: 100 }),
  };
}

export function mockShoppingCart() {
  vi.mock('@/hooks/useShoppingCart', () => ({
    useShoppingCart: vi.fn().mockReturnValue({
      products: Array.from({
        length: faker.datatype.number({ min: 1, max: 10 }),
      }).map(() => mockShoppingCartProduct()),
    }),
  }));

  vi.mock('@/utils/api', () => ({
    api: {
      product: {
        getAllProductsByIds: {
          useQuery: vi.fn().mockReturnValue({
            data: [],
            isLoading: false,
          }),
        },
      },
    },
  }));
}
