import { faker } from '@faker-js/faker';
import { type Product } from '@prisma/client';

export function mockProduct(): Product {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.product(),
    price: faker.datatype.number(),
    description: faker.commerce.productDescription(),
    imageUrl: faker.internet.avatar(),
    productTypeId: faker.datatype.uuid(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
  };
}
