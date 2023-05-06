import { type ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

import { Typography } from '@/components';

import { useShoppingCart } from '@/hooks';

import { useProductOrder } from '../../hooks';
import { useProduct } from '@/components/Product/hooks';
import { formatCurrency } from '@/utils';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const AddToCartButton: React.FC<Props> = props => {
  const { className, ...rest } = props;

  const { addProduct } = useShoppingCart();

  const { product } = useProduct();

  const { productVariant, quantitySelector } = useProductOrder();

  const { quantity } = quantitySelector;

  function handleAddProduct(): void {
    addProduct({
      product,
      quantity,
      variants: Object.values(productVariant.variants).map(variant => variant),
    });
  }

  const totalPrice = product.price * quantity;

  return (
    <button
      className={clsx(
        'flex w-full items-center justify-center rounded-sm bg-red p-2',
        className && className,
      )}
      {...rest}
      onClick={handleAddProduct}
    >
      <Typography className="font-bold text-white" component="span">
        Add to cart&nbsp;({formatCurrency(totalPrice)})
      </Typography>
    </button>
  );
};
