import clsx from 'clsx';

import { Link } from '@/components';

export const StoreCategoryNavigation: React.FC = () => {
  const currentRoute = 'Home';

  return (
    <ul className="flex gap-4 overflow-x-auto py-4">
      {['Home', 'Restaurants', 'Markets', 'Drinks', 'Pharma'].map(name => (
        <Link
          className={clsx('block font-bold', {
            'text-t-secondary': currentRoute !== name,
            'text-red underline underline-offset-8': currentRoute === name,
          })}
          href="/"
          key={`navigation-${name}`}
        >
          {name}
        </Link>
      ))}
    </ul>
  );
};
