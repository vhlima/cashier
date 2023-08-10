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
    id: 'burger',
    name: 'Burgers',
    icon: CiBurger,
    route: '/menu/burger',
  },
  {
    id: 'pizza',
    name: 'Pizzas',
    icon: CiPizza,
    route: '/menu/pizza',
  },
  {
    id: 'snack',
    name: 'Snacks',
    icon: CiFries,
    route: '/menu/snack',
  },
  {
    id: 'drink',
    name: 'Soft Drinks',
    icon: CiGlass,
    route: '/menu/drink',
  },
  {
    id: 'coffee',
    name: 'Coffees',
    icon: CiCoffeeCup,
    route: '/menu/coffee',
  },
  {
    id: 'ice-cream',
    name: 'Ice Creams',
    icon: CiIceCream,
    route: '/menu/ice-cream',
  },
];
