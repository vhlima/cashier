import { type ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

import { useProductOptions } from '@/components/Product/ProductOrderModal/hooks';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variantId: string;
  optionId: string;
}

export const VariantRadioSelector: React.FC<Props> = props => {
  const { className, variantId, optionId, ...rest } = props;

  const { selectedOptions, changeVariantQuantity } = useProductOptions();

  const variantInfo = selectedOptions[optionId]?.find(
    v => v.variantId === variantId,
  );

  const isChecked = !!(variantInfo && variantInfo.quantity > 0);

  function handleClick(): void {
    const selectedVariant = selectedOptions[optionId]?.find(
      v => v.quantity > 0,
    );

    if (selectedVariant) {
      changeVariantQuantity(optionId, selectedVariant.variantId, false);
    }

    changeVariantQuantity(optionId, variantId, !isChecked);
  }

  return (
    <button
      className={clsx(
        'mx-2 flex h-6 w-6 cursor-pointer items-center justify-center space-x-2 rounded-full transition-colors',
        {
          'bg-red': isChecked,
          'border border-gray-200 bg-white-low': !isChecked,
        },
        className && className,
      )}
      {...rest}
      onClick={handleClick}
    >
      <div
        className={`h-1/2 w-1/2 rounded-full ${
          isChecked ? 'bg-white-low' : 'bg-transparent'
        }`}
      />
    </button>
  );
};
