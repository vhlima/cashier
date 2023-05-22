import { type RenderResult, render } from '@testing-library/react';

import { vi } from 'vitest';

import { mockProduct } from 'tests/mocks';

import { faker } from '@faker-js/faker';

import { formatCurrency } from '@/utils';

import { ShoppingCartProductInfo } from '.';

type SutType = {
  sut: RenderResult;
  name: string;
  price: number;
  quantity: number;
};

function createSut(): SutType {
  const { name, price } = mockProduct();

  const quantity = faker.datatype.number({ min: 1, max: 100 });

  const sut = render(
    <ShoppingCartProductInfo name={name} price={price} quantity={quantity} />,
  );

  return {
    sut,
    name,
    price,
    quantity,
  };
}

describe('ShoppingCartProductInfo', () => {
  test('Should render product name correctly', () => {
    const { sut, name } = createSut();

    const nameElement = sut.getByTestId('product-name');
    expect(nameElement.textContent).toEqual(name);
  });
  test('Should render product quantity correctly', () => {
    const { sut, quantity } = createSut();

    const quantityElement = sut.getByTestId('product-quantity');
    expect(quantityElement.textContent).toEqual(String(quantity));
  });
  test('Should format and display the product price correctly', () => {
    const { sut, price } = createSut();

    vi.mock('@/utils', () => ({
      formatCurrency: vi.fn((price: number) => `$${price}`),
    }));

    expect(formatCurrency).toHaveBeenCalledWith(price);

    const priceElement = sut.getByTestId('product-price');
    expect(priceElement.textContent).toEqual(`$${price}`);
  });
});
