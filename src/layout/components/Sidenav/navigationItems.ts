import type { IconType } from 'react-icons';

import { AiOutlineShop, AiOutlineSetting } from 'react-icons/ai';

import { RiBillLine } from 'react-icons/ri';

export type NavigationItem = {
  name: string;
  route: string;
  icon: IconType;
};

export const navigationItems: NavigationItem[] = [
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
