import { type ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

import { Typography } from '@/components';

import { useProduct } from '@/components/Product/hooks';

import { useProductOrder } from '../../hooks';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const AddToCartButton: React.FC<Props> = props => {
  const { className, ...rest } = props;

  const { quantity } = useProductOrder();

  const { product } = useProduct();

  function calculateTotal() {
    return product.price * quantity;
  }

  return (
    <button
      className={clsx(
        'flex items-center justify-center rounded-sm bg-red p-2',
        className && className,
      )}
      {...rest}
    >
      <Typography className="font-bold text-white" component="span">
        Add to cart&nbsp;(${calculateTotal()})
      </Typography>
    </button>
  );
};
