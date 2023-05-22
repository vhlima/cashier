import { Typography } from '@/components';

import { SearchBar } from '../index';

import { ShoppingCartButton } from './components';

export const MenuHeader: React.FC = () => {
  return (
    <div className="flex items-center">
      <Typography component="h1" size="3xl">
        <strong>Menu</strong>
        &nbsp;Category
      </Typography>

      <div className="ml-auto flex items-center gap-4">
        <ShoppingCartButton />
        <SearchBar />
      </div>
    </div>
  );
};
