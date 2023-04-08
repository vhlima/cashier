import { type RenderResult, render } from '@testing-library/react';

import { AiFillAccountBook } from 'react-icons/ai';

import { faker } from '@faker-js/faker';

import { MockedRouterProvider } from 'tests/mocks';

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
      <MenuCategory name={name} route={route} icon={AiFillAccountBook} />
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

    const linkElement = sut.getByTestId('menu-category');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest('a')).not.toBeNull();
  });
});
