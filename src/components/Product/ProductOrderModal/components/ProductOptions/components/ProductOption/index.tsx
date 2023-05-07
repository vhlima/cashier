import { forwardRef } from 'react';
import { ProductVariant, ProductOptionsHeader } from '../index';

import {
  type ProductOption as IProductOption,
  type ProductVariant as IProductVariant,
} from '@prisma/client';
import clsx from 'clsx';

interface Props extends IProductOption {
  sticky?: boolean;
  variants: IProductVariant[];
}

/* eslint-disable react/display-name */
export const ProductOption = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { sticky, name, minOptions, maxOptions, variants } = props;

  return (
    <div ref={ref}>
      <ProductOptionsHeader
        className={clsx({
          'sticky top-[9.5%]': sticky,
        })}
        title={name}
        description="Escolha até 4 opções."
      />

      <ul className="px-4">
        {variants.map(variant => (
          <ProductVariant
            key={`product-option-${variant.id}`}
            option={{ minQuantity: minOptions, maxQuantity: maxOptions || 0 }}
            {...variant}
          />
        ))}
      </ul>
    </div>
  );
});
