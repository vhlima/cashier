import { type RenderResult, render } from '@testing-library/react';

import { Navigation } from '.';

import { navigationItems } from '../../navigationItems';

import { MockedRouterProvider } from 'tests/mocks';

function createSut(): RenderResult {
  const sut = render(
    <MockedRouterProvider url="/">
      <Navigation />
    </MockedRouterProvider>,
  );
  return sut;
}

describe('Navigation', () => {
  test('Should render navigation items correctly', () => {
    const sut = createSut();

    const navigationElement = sut.getByTestId('navigation');
    expect(navigationElement).toBeInTheDocument();
    expect(navigationElement.childElementCount).toEqual(navigationItems.length);
  });
  test('Should display only one active navigation route', () => {
    const sut = createSut();

    const activeElements = sut.getAllByTestId('navigation-item-active');
    expect(activeElements.length).toEqual(1);
  });
});
