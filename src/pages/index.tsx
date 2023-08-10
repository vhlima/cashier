import type { NextPage } from 'next';

import { MenuCategory } from '@/views';

const HomePage: NextPage = () => {
  return <MenuCategory productTypeName="hot" />;
};

export default HomePage;
