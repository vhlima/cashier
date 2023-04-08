import { type RenderResult, render } from '@testing-library/react';

import { faker } from '@faker-js/faker';

import { menuCategories } from '@/views/MenuCategory/categories';

import { MenuCategories } from '.';

type SutType = {
  sut: RenderResult;
  selectedCategoryName: string;
};

function createSut(): SutType {
  const selectedCategory =
    menuCategories[
      faker.datatype.number({ min: 0, max: menuCategories.length - 1 })
    ];

  if (!selectedCategory) {
    throw new Error('Menu categories cannot be empty.');
  }

  const sut = render(
    <MenuCategories selectedCategory={selectedCategory.name} />,
  );

  return {
    sut,
    selectedCategoryName: selectedCategory.name,
  };
}

describe('MenuCategories', () => {
  test('Should render menu categories correctly', () => {
    const { sut } = createSut();

    const categoriesElement = sut.getByTestId('menu-categories');
    expect(categoriesElement).toBeInTheDocument();
    expect(categoriesElement.childElementCount).toEqual(menuCategories.length);
  });
});
