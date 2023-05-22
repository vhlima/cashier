import { Typography } from '@/components';

import { formatCurrency } from '@/utils';

interface Props {
  name: string;
  quantity: number;
  price: number;
}

export const ShoppingCartProductInfo: React.FC<Props> = props => {
  const { name, quantity, price } = props;

  return (
    <div className="flex w-full justify-between gap-4 font-medium">
      <Typography component="h2">
        {quantity}x {name}
      </Typography>

      <Typography component="span">{formatCurrency(price)}</Typography>
    </div>
  );
};
