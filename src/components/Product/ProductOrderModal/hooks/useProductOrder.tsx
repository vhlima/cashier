import { type PropsWithChildren, createContext, useContext } from 'react';

import {
  type ProductOption,
  type Product,
  type ProductVariant,
} from '@prisma/client';

import { useShoppingCart } from '@/hooks';

import { type QuantitySelectorContextData, useQuantitySelector } from './index';

type ProductWithOptions = Product & {
  productOptions: (ProductOption & {
    variants: ProductVariant[];
  })[];
};

interface ProductOrderContextData {
  product: ProductWithOptions;
  quantitySelector: QuantitySelectorContextData;
}

interface Props {
  product: ProductWithOptions;
}

const ProductOrderContext = createContext({} as ProductOrderContextData);

export const ProductOrderContextProvider: React.FC<
  PropsWithChildren<Props>
> = props => {
  const { product, children } = props;

  const { products } = useShoppingCart();

  const defaultQuantitySelectorState =
    products.find(info => info.productId === product.id)?.quantity || 1;

  const quantitySelector = useQuantitySelector(defaultQuantitySelectorState);

  return (
    <ProductOrderContext.Provider
      value={{
        product,
        quantitySelector,
      }}
    >
      {children}
    </ProductOrderContext.Provider>
  );
};

export function useProductOrder(): ProductOrderContextData {
  const context = useContext(ProductOrderContext);

  if (!context) {
    throw new Error('useProductOrder should be used within an provider.');
  }

  return context;
}
