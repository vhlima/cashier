import type { IconType } from 'react-icons';

import { AiOutlineFire } from 'react-icons/ai';

import {
  CiGlass,
  CiBurger,
  CiPizza,
  CiFries,
  CiIceCream,
  CiCoffeeCup,
} from 'react-icons/ci';

export type Category = {
  name: string;
  route: string;
  icon: IconType;
};

export const menuCategories: Category[] = [
  {
    name: 'Hot',
    icon: AiOutlineFire,
    route: '/',
  },
  {
    name: 'Burger',
    icon: CiBurger,
    route: '/burger',
  },
  {
    name: 'Pizza',
    icon: CiPizza,
    route: '/pizza',
  },
  {
    name: 'Snack',
    icon: CiFries,
    route: '/snack',
  },
  {
    name: 'Soft Drink',
    icon: CiGlass,
    route: '/drink',
  },
  {
    name: 'Coffee',
    icon: CiCoffeeCup,
    route: '/coffee',
  },
  {
    name: 'Ice Cream',
    icon: CiIceCream,
    route: '/ice-cream',
  },
];
