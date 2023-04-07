import { type RenderResult, render } from '@testing-library/react';

import { AiFillAccountBook } from 'react-icons/ai';

import { faker } from '@faker-js/faker';

import { NavigationItem } from '.';

type SutType = {
  sut: RenderResult;
  name: string;
  route: string;
};

function createSut(): SutType {
  const name = faker.word.adjective();
  const route = `/${faker.word.adjective()}`;

  const sut = render(
    <NavigationItem name={name} route={route} icon={AiFillAccountBook} />,
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
});
