import { type ProductVariant as IProductVariant } from '@prisma/client';

import { Typography } from '@/components';

import { useProductOrder } from '../../../../hooks';

import { AmountSelector } from '../../../AmountSelector';
import { RadioButton } from './components';
import { formatCurrency } from '@/utils';

interface Props extends IProductVariant {
  option: {
    minQuantity: number;
    maxQuantity: number;
  };
}

export const ProductVariant: React.FC<Props> = props => {
  const { id, name, description, price, option } = props;

  const { productVariant } = useProductOrder();

  const { variants, findVariant, addVariant, updateVariant } = productVariant;

  function increaseQuantity(): void {
    const variant = findVariant(id);

    if (variant) {
      updateVariant(id, variant => ({
        quantity: variant.quantity + 1,
      }));
      return;
    }

    addVariant({
      quantity: 1,
      variant: props,
    });
  }

  function decreaseQuantity(): void {
    const variant = findVariant(id);

    if (variant) {
      updateVariant(id, variant => ({
        quantity: variant.quantity - 1,
      }));
      return;
    }
  }

  return (
    <li className="flex items-center justify-between border-b border-b-gray-200 py-4 last-of-type:border-b-0">
      <div className="flex flex-col">
        <Typography component="span">{name}</Typography>

        {description && (
          <Typography component="span" size="sm">
            {description}
          </Typography>
        )}

        <Typography component="span">+ {formatCurrency(price)}</Typography>
      </div>

      {option.minQuantity === 1 && option.maxQuantity === 1 ? (
        <RadioButton asd={name} />
      ) : (
        <AmountSelector
          initialQuantity={0}
          quantity={variants[id]?.quantity || 0}
          increase={increaseQuantity}
          decrease={decreaseQuantity}
        />
      )}
    </li>
  );
};
