import { Typography } from '@/components';

export const MenuProductsHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <Typography component="h1" size="3xl">
        <strong>Choose</strong>
        &nbsp;Order
      </Typography>

      <button>
        <Typography component="span">
          Sort by <strong>Popular</strong>
        </Typography>
      </button>
    </div>
  );
};
