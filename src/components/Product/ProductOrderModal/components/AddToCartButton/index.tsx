import { useMemo, type ButtonHTMLAttributes, type MouseEvent } from 'react';

import clsx from 'clsx';

import { Typography } from '@/components';

import { useShoppingCart } from '@/hooks';

import { formatCurrency } from '@/utils';

import { useProductOptions, useProductOrder } from '../../hooks';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const AddToCartButton: React.FC<Props> = props => {
  const { className, onClick, ...rest } = props;

  const { product, quantitySelector } = useProductOrder();

  const { selectedOptions } = useProductOptions();

  const { addProduct } = useShoppingCart();

  const { quantity } = quantitySelector;

  function handleClick(e: MouseEvent<HTMLButtonElement>): void {
    addProduct({
      productId: product.id,
      quantity,
      options: selectedOptions,
    });

    if (onClick) {
      onClick(e);
    }
  }

  const optionsPrice = useMemo(
    () =>
      Object.entries(selectedOptions).reduce((optionsAgg, entry) => {
        const [optionId, variants] = entry;

        const option = product.productOptions.find(
          currentOption => currentOption.id === optionId,
        );

        if (!option) {
          return optionsAgg;
        }

        const variantsPrice = variants.reduce((variantsAgg, variantInfo) => {
          const variant = option.variants.find(
            v => v.id === variantInfo.variantId,
          );

          if (!variant) {
            return variantsAgg;
          }

          return (variantsAgg += variant.price * variantInfo.quantity);
        }, 0);

        return (optionsAgg += variantsPrice);
      }, 0),
    [selectedOptions, product],
  );

  const totalPrice = (product.price + optionsPrice) * quantity;

  return (
    <button
      className={clsx(
        'flex w-full items-center justify-center rounded-sm bg-red p-2',
        className && className,
      )}
      onClick={handleClick}
      {...rest}
    >
      <Typography className="font-bold text-white" component="span">
        Add to cart&nbsp;({formatCurrency(totalPrice)})
      </Typography>
    </button>
  );
};
