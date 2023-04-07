import { type RenderResult, render, fireEvent } from '@testing-library/react';

import { AiFillAccountBook } from 'react-icons/ai';

import { faker } from '@faker-js/faker';

import { MockedRouterProvider } from 'tests/mocks';

import { NavigationItem } from '.';
import { mockedRouter } from 'tests/mocks';

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
      <NavigationItem name={name} route={route} icon={AiFillAccountBook} />
    </MockedRouterProvider>,
  );

  return {
    sut,
    name,
    route,
  };
}

describe('NavigationItem', () => {
  test('Should render icon correctly', () => {
    const { sut } = createSut();

    const iconElement = sut.getByTestId('navigation-item-icon');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement.closest('svg')).not.toBeNull();
  });
  test('Should render name correctly', () => {
    const { sut, name } = createSut();

    const nameElement = sut.getByTestId('navigation-item-name');
    expect(nameElement).toBeInTheDocument();
    expect(nameElement.textContent).toEqual(name);
  });
  test('Should navigate to correct URL when clicking on navigation item', () => {
    const { sut, route } = createSut();

    const linkElement = sut.getByTestId('navigation-item');
    fireEvent.click(linkElement);

    expect(mockedRouter.asPath).toEqual(route);
  });
});
