import { type ProductVariant as ProductVariantProps } from '@prisma/client';

import { Typography } from '@/components';

import { formatCurrency } from '@/utils';

import { VariantRadioSelector, VariantAmountSelector } from './components';

interface Props extends ProductVariantProps {
  intent?: 'selector' | 'radio';
}

export const ProductVariant: React.FC<Props> = props => {
  const {
    intent = 'selector',
    id,
    productOptionId,
    name,
    description,
    price,
  } = props;

  return (
    <li className="flex items-center justify-between border-b border-b-gray-200 py-4 last-of-type:border-b-0">
      <div className="flex flex-col">
        <Typography component="span">{name}</Typography>

        {description && (
          <Typography component="span" size="sm">
            {description}
          </Typography>
        )}

        {price > 0 && (
          <Typography component="span">+ {formatCurrency(price)}</Typography>
        )}
      </div>

      {intent === 'radio' ? (
        <VariantRadioSelector variantId={id} optionId={productOptionId} />
      ) : (
        <VariantAmountSelector variantId={id} optionId={productOptionId} />
      )}
    </li>
  );
};
