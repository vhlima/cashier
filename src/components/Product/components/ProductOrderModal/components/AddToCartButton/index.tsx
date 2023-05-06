import { type ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

import { Typography } from '@/components';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  productPrice: number;
  quantity: number;
}

export const AddToCartButton: React.FC<Props> = props => {
  const { className, productPrice, quantity, ...rest } = props;

  const totalPrice = productPrice * quantity;

  return (
    <button
      className={clsx(
        'flex items-center justify-center rounded-sm bg-red p-2',
        className && className,
      )}
      {...rest}
    >
      <Typography className="font-bold text-white" component="span">
        Add to cart&nbsp;(${totalPrice})
      </Typography>
    </button>
  );
};
