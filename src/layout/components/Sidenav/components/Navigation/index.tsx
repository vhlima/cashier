import { useRouter } from 'next/router';

import { NavigationItem } from '../index';

import { navigationItems } from '../../navigationItems';

export const Navigation: React.FC = () => {
  const { asPath } = useRouter();

  return (
    <nav
      className="flex flex-col items-center gap-8 px-4"
      data-testid="navigation"
    >
      {navigationItems.map(item => (
        <NavigationItem
          key={`navigation-item-${item.name}`}
          isActive={asPath === item.route}
          {...item}
        />
      ))}
    </nav>
  );
};
