import { Typography } from '@/components';

export const NewProductTag: React.FC = () => {
  return (
    <div
      className="absolute -right-2 -top-1 rounded-br-lg rounded-tl-lg bg-red px-3"
      data-testid="menu-product-new"
    >
      <Typography className="text-white" component="span" size="xs">
        New
      </Typography>
    </div>
  );
};
