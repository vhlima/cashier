import { useRouter } from 'next/router';

import { AiOutlineShop, AiOutlineSetting } from 'react-icons/ai';

import { RiBillLine } from 'react-icons/ri';

import { NavigationItem } from '../index';

const navigationItems = [
  {
    name: 'Home',
    route: '/',
    icon: AiOutlineShop,
  },
  {
    name: 'Bills',
    route: '/bills',
    icon: RiBillLine,
  },
  {
    name: 'Settings',
    route: '/settings',
    icon: AiOutlineSetting,
  },
];

export const Navigation: React.FC = () => {
  const { asPath } = useRouter();

  return (
    <nav className="mt-16 flex flex-col items-center gap-8 px-4">
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
