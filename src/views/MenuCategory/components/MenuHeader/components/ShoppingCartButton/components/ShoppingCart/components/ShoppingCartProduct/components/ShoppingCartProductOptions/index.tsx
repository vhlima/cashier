import { type ProductOption, type ProductVariant } from '@prisma/client';

import { useShoppingCart } from '@/hooks';

import { ShoppingCartProductOptionVariants } from '../index';

type ProductWithVariants = (ProductOption & {
  variants: ProductVariant[];
})[];

interface Props {
  productId: string;
  productOptions: ProductWithVariants;
}

export const ShoppingCartProductOptions: React.FC<Props> = props => {
  const { productId, productOptions } = props;

  const { products } = useShoppingCart();

  const productInfoFound = products.find(
    product => product.productId === productId,
  );

  if (!productInfoFound) {
    return null;
  }

  return (
    <div className="flex gap-1">
      {Object.entries(productInfoFound.options).map(entry => {
        const [optionId, variants] = entry;

        const productOption = productOptions.find(
          currentOption => currentOption.id === optionId,
        );

        if (!productOption) {
          return null;
        }

        return (
          <ShoppingCartProductOptionVariants
            key={`shopping-cart-option-variant-${optionId}`}
            shoppingCartVariants={variants}
            productVariants={productOption.variants}
          />
        );
      })}
    </div>
  );
};
