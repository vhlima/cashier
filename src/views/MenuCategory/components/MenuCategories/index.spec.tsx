import { type RenderResult, render } from '@testing-library/react';

import { faker } from '@faker-js/faker';

import { menuCategories } from '@/views/MenuCategory/categories';

import { MenuCategories } from '.';

type SutType = {
  sut: RenderResult;
  selectedCategoryId: string;
};

function createSut(): SutType {
  const selectedCategory =
    menuCategories[
      faker.datatype.number({ min: 0, max: menuCategories.length - 1 })
    ];

  if (!selectedCategory) {
    throw new Error('Menu categories cannot be empty.');
  }

  const sut = render(<MenuCategories selectedCategory={selectedCategory.id} />);

  return {
    sut,
    selectedCategoryId: selectedCategory.id,
  };
}

describe('MenuCategories', () => {
  test('Should render menu categories correctly', () => {
    const { sut } = createSut();

    const categoriesElement = sut.getByTestId('menu-categories');
    expect(categoriesElement).toBeInTheDocument();
    expect(categoriesElement.childElementCount).toEqual(menuCategories.length);
  });
  test('Should render only one active menu category', () => {
    const { sut } = createSut();

    const activeElements = sut.queryAllByTestId('menu-category-active');
    expect(activeElements.length).toEqual(1);
  });
});
