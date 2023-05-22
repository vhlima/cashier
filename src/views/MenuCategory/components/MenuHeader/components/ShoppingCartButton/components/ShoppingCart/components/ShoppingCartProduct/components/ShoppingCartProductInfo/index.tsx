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
        <span data-testid="product-quantity">{quantity}</span>x&nbsp;
        <span data-testid="product-name">{name}</span>
      </Typography>

      <Typography component="span" data-testid="product-price">
        {formatCurrency(price)}
      </Typography>
    </div>
  );
};
