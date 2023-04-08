import { type RenderResult, render, fireEvent } from '@testing-library/react';

import { AiFillAccountBook } from 'react-icons/ai';

import { faker } from '@faker-js/faker';

import { MockedRouterProvider, mockedRouter } from 'tests/mocks';

import { MenuCategory } from '.';

type SutType = {
  sut: RenderResult;
  name: string;
  route: string;
};

function createSut(): SutType {
  const name = faker.word.adjective();
  const route = `/${faker.word.adjective()}`;

  const sut = render(
    <MockedRouterProvider>
      <MenuCategory
        name={name}
        route={route}
        displayOrder={0}
        icon={AiFillAccountBook}
      />
    </MockedRouterProvider>,
  );

  return {
    sut,
    name,
    route,
  };
}

describe('MenuCategory', () => {
  test('Should render icon correctly', () => {
    const { sut } = createSut();

    const iconElement = sut.getByTestId('menu-category-icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement.closest('svg')).not.toBeNull();
  });
  test('Should render menu category name correctly', () => {
    const { sut, name } = createSut();

    const nameElement = sut.getByTestId('menu-category-name');
    expect(nameElement).toBeInTheDocument();
    expect(nameElement.textContent).toEqual(name);
  });
  test('Should render menu category link correctly', () => {
    const { sut } = createSut();

    const linkElement = sut.getByTestId('menu-category-link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest('a')).not.toBeNull();
  });
  test('Should navigate to the correct URL when clicking menu category', () => {
    const { sut, route } = createSut();

    const linkElement = sut.getByTestId('menu-category-link');
    fireEvent.click(linkElement);

    expect(mockedRouter.asPath).toEqual(route);
  });
});
