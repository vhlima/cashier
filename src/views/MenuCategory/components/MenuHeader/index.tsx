import { Typography } from '@/components';

import { SearchBar } from '../index';

export const MenuHeader: React.FC = () => {
  return (
    <div className="flex flex-col justify-between gap-4 md:flex-row">
      <Typography component="h1" size="3xl">
        <strong>Menu</strong>
        &nbsp;Category
      </Typography>

      <SearchBar />
    </div>
  );
};
