import { type HTMLAttributes } from 'react';

import { ProductVariant, ProductOptionsHeader } from '../index';

import { type ProductVariant as IProductVariant } from '@prisma/client';

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string;
  variants: IProductVariant[];
}

export const ProductOption: React.FC<Props> = props => {
  const { name, variants, ...rest } = props;

  return (
    <div {...rest}>
      <ProductOptionsHeader title={name} description="Escolha até 4 opções." />

      <ul className="px-4">
        {variants.map(variant => (
          <ProductVariant key={`product-option-${variant.id}`} {...variant} />
        ))}
      </ul>
    </div>
  );
};
