import { type ProductOption, type ProductVariant } from '@prisma/client';

import {
  ShoppingCartProductActions,
  ShoppingCartProductInfo,
  ShoppingCartProductOptions,
} from './components';

type ProductWithVariants = (ProductOption & {
  variants: ProductVariant[];
})[];

interface Props {
  id: string;
  name: string;
  price: number;
  quantity: number;
  productOptions: ProductWithVariants;
}

export const ShoppingCartProduct: React.FC<Props> = props => {
  const { id, name, price, quantity, productOptions } = props;

  return (
    <li className="mb-4 flex flex-col border-b border-b-gray-200 pb-4 last-of-type:mb-0 last-of-type:border-b-0 last-of-type:pb-0">
      <ShoppingCartProductInfo name={name} price={price} quantity={quantity} />

      <ShoppingCartProductOptions
        productId={id}
        productOptions={productOptions}
      />

      <ShoppingCartProductActions productId={id} />
    </li>
  );
};
