import { Typography } from '@/components';

import { formatCurrency } from '@/utils';

interface Props {
  name: string;
  description: string;
  price: number;
}

export const ProductInfo: React.FC<Props> = props => {
  const { name, description, price } = props;

  return (
    <div className="flex flex-col">
      <Typography
        className="text-start font-medium"
        component="span"
        size="lg"
        data-testid="menu-product-name"
      >
        {name}
      </Typography>

      <Typography className="text-start" component="p">
        {description}
      </Typography>

      <Typography
        className="mt-4 block text-start"
        component="span"
        size="lg"
        data-testid="menu-product-price"
      >
        {formatCurrency(price)}
      </Typography>
    </div>
  );
};
