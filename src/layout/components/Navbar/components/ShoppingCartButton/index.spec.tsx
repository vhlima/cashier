import { type RenderResult, render } from '@testing-library/react';

import { mockShoppingCart } from 'tests/mocks';

import { useShoppingCart } from '@/hooks';

import { ShoppingCartButton } from '.';

mockShoppingCart();

function createSut(): RenderResult {
  const sut = render(<ShoppingCartButton />);
  return sut;
}

describe('ShoppingCartButton', () => {
  test('Should render the correct quantity of products in the shopping cart', () => {
    const sut = createSut();

    const { products } = useShoppingCart();

    const quantityElement = sut.getByTestId('shopping-cart-quantity');
    expect(quantityElement.textContent).toEqual(String(products.length));
  });
});
