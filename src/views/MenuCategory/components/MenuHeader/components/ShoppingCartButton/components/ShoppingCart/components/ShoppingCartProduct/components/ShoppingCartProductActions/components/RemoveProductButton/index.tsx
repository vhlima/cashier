import { type HTMLAttributes } from 'react';

import clsx from 'clsx';

import { useShoppingCart } from '@/hooks';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  productId: string;
}

export const RemoveProductButton: React.FC<Props> = props => {
  const { className, productId, ...rest } = props;

  const { removeProduct } = useShoppingCart();

  return (
    <button
      className={clsx('font-medium', className && className)}
      type="button"
      {...rest}
      onClick={() => removeProduct(productId)}
    >
      Remover
    </button>
  );
};
