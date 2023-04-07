import { Typography } from '@/components';

import { SearchBar } from '../index';

export const MenuHeader: React.FC = () => {
  return (
    <div className="flex justify-between">
      <Typography component="h1" size="3xl">
        <strong>Menu</strong>
        &nbsp;Category
      </Typography>

      <SearchBar />
    </div>
  );
};
