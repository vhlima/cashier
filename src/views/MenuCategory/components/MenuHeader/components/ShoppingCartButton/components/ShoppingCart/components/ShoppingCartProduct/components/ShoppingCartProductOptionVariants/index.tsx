import { Typography } from '@/components';

import { type ShoppingCartOptionVariant } from '@/hooks';

import { type ProductVariant } from '@prisma/client';

interface Props {
  shoppingCartVariants: ShoppingCartOptionVariant[];
  productVariants: ProductVariant[];
}

export const ShoppingCartProductOptionVariants: React.FC<Props> = props => {
  const { shoppingCartVariants, productVariants } = props;

  return (
    <>
      {shoppingCartVariants.map(variantInfo => {
        const productVariant = productVariants.find(
          currentVariant => currentVariant.id === variantInfo.variantId,
        );

        if (!productVariant) {
          return null;
        }

        return (
          <Typography
            key={`product-variant-${variantInfo.variantId}`}
            component="span"
            size="sm"
          >
            {variantInfo.quantity}x {productVariant.name}
          </Typography>
        );
      })}
    </>
  );
};
