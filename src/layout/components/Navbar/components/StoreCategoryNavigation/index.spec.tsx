import { type RenderResult, render } from '@testing-library/react';

import { StoreCategoryNavigation } from '.';
import { mockStoreCategories } from 'tests/mocks';
import { vi } from 'vitest';

function createSut(): RenderResult {
  const sut = render(<StoreCategoryNavigation />);
  return sut;
}

const asd = vi.

const mockedApi = {
  api: {
    store: {
      getStoreTypes: {
        useQuery: vi.fn().mockReturnValue({
          data: mockStoreCategories(5),
          isLoading: false,
        }),
      },
    },
  },
};

vi.mock('@/utils/api', () => mockedApi);

describe('StoreCategoryNavigation', () => {
  test('Should render error when no store category is found', () => {
    const sut = createSut();

    const storeCategoriesElement = sut.getByTestId('store-categories');
    expect(storeCategoriesElement.childElementCount).toEqual(5);
  });
});
