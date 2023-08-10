import clsx from 'clsx';

import { Link, Typography } from '@/components';

import { api } from '@/utils/api';

export const StoreCategoryNavigation: React.FC = () => {
  const currentRoute = '/';

  const { data: categoriesData, isLoading } =
    api.store.getStoreTypes.useQuery();

  if (!categoriesData || categoriesData.length === 0) {
    return (
      <Typography
        component="p"
        color="error"
        data-testid="store-category-error"
      >
        No store category was found.
      </Typography>
    );
  }

  if (isLoading) {
    return (
      <Typography component="p" data-testid="store-category-loading">
        Loading...
      </Typography>
    );
  }

  return (
    <ul className="flex gap-4 overflow-x-auto" data-testid="store-categories">
      {categoriesData.map(category => {
        const isRouteActive = currentRoute === category.routeName;

        return (
          <Link
            className={clsx('block font-bold', {
              'text-t-secondary': !isRouteActive,
              'text-red underline underline-offset-8': isRouteActive,
            })}
            href="/"
            key={`store-category-navigation-${category.id}`}
            data-testid={
              !isRouteActive ? 'store-category' : 'store-category-active'
            }
          >
            {category.name}
          </Link>
        );
      })}
    </ul>
  );
};
