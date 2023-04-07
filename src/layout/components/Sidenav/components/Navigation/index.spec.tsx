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
});
