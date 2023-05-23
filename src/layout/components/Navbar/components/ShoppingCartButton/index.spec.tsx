import { type RenderResult, render, fireEvent } from '@testing-library/react';

import { mockShoppingCart } from 'tests/mocks';

import { useShoppingCart } from '@/hooks';

import { ShoppingCartButton } from '.';

function createSut(): RenderResult {
  const sut = render(<ShoppingCartButton />);
  return sut;
}

mockShoppingCart();

describe('ShoppingCartButton', () => {
  test('Should render the correct quantity of products in the shopping cart', () => {
    const sut = createSut();

    const { products } = useShoppingCart();

    const quantityElement = sut.getByTestId('shopping-cart-quantity');
    expect(quantityElement.textContent).toEqual(String(products.length));
  });
  test('Should render shopping cart icon correctly', () => {
    const sut = createSut();

    const iconElement = sut.getByTestId('shopping-cart-icon');
    expect(iconElement).toBeInTheDocument();
  });
  test('Should open ShoppingCart when clicking the button', () => {
    const sut = createSut();

    const buttonElement = sut.getByTestId('shopping-cart-button');
    fireEvent.click(buttonElement);

    const shoppingCartElement = sut.getByTestId('shopping-cart');
    expect(shoppingCartElement).toBeInTheDocument();
  });
});
