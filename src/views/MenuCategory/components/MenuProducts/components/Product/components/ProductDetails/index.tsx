import { Typography } from '@/components';

interface Props {
  name: string;
  description: string;
  price: number;
}

export const ProductDetails: React.FC<Props> = props => {
  const { name, description, price } = props;

  return (
    <>
      <Typography
        className="font-medium"
        component="span"
        size="lg"
        data-testid="menu-product-name"
      >
        {name}
      </Typography>

      <Typography component="p">{description}</Typography>

      <Typography component="span" color="secondary">
        $<span data-testid="menu-product-price">{price}</span>
      </Typography>
    </>
  );
};
