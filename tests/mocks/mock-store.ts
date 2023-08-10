import { faker } from '@faker-js/faker';

import { type StoreCategory } from '@prisma/client';

export function mockStoreCategory(): StoreCategory {
  const department = faker.commerce.department();

  return {
    id: faker.datatype.uuid(),
    name: department,
    routeName: `/${department.toLowerCase()}`,
  };
}

export function mockStoreCategories(amount: number): StoreCategory[] {
  return Array.from({
    length: amount,
  }).map(() => mockStoreCategory());
}
