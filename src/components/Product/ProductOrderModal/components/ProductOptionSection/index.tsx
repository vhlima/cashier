import { forwardRef } from 'react';

import clsx from 'clsx';

import {
  type ProductVariant as IProductVariant,
  type ProductOption,
} from '@prisma/client';

import { ProductOptionHeader, ProductVariant } from './components';

interface Props extends ProductOption {
  variants: IProductVariant[];
  sticky?: boolean;
}

/* eslint-disable react/display-name */
export const ProductOptionSection = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const { sticky, name, variants, minOptions, maxOptions } = props;

    return (
      <div ref={ref}>
        <ProductOptionHeader
          className={clsx({
            'sticky top-[9.5%]': sticky,
          })}
          title={name}
          description="Escolha até 4 opções."
        />

        {variants.map(variant => (
          <ProductVariant
            key={`product-variant-${variant.id}`}
            option={{ minQuantity: minOptions, maxQuantity: maxOptions || 0 }}
            {...variant}
          />
        ))}
      </div>
    );
  },
);
