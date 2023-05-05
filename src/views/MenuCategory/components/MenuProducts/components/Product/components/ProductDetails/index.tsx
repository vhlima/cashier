import { Typography } from '@/components';

interface Props {
  name: string;
  description: string;
  price: number;
}

export const ProductDetails: React.FC<Props> = props => {
  const { name, description, price } = props;

  return (
    <div className="flex flex-col">
      <Typography
        className="font-medium"
        component="span"
        size="lg"
        data-testid="menu-product-name"
      >
        {name}
      </Typography>

      <Typography component="p">{description}</Typography>

      <Typography className="mt-auto block" component="span" size="lg">
        $<span data-testid="menu-product-price">{price}</span>
      </Typography>
    </div>
  );
};
