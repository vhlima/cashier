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
  id: string;
  name: string;
  route: string;
  icon: IconType;
};

export const menuCategories: Category[] = [
  {
    id: 'hot',
    name: 'Hot',
    icon: AiOutlineFire,
    route: '/',
  },
  {
    id: 'burgers',
    name: 'Burger',
    icon: CiBurger,
    route: '/menu/burgers',
  },
  {
    id: 'pizzas',
    name: 'Pizza',
    icon: CiPizza,
    route: '/menu/pizzas',
  },
  {
    id: 'snacks',
    name: 'Snack',
    icon: CiFries,
    route: '/menu/snacks',
  },
  {
    id: 'drinks',
    name: 'Soft Drink',
    icon: CiGlass,
    route: '/menu/drinks',
  },
  {
    id: 'coffees',
    name: 'Coffee',
    icon: CiCoffeeCup,
    route: '/menu/coffees',
  },
  {
    id: 'ice-creams',
    name: 'Ice Cream',
    icon: CiIceCream,
    route: '/menu/ice-creams',
  },
];
