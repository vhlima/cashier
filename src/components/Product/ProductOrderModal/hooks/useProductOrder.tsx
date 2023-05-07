import { type PropsWithChildren, createContext, useContext } from 'react';

import { type Product } from '@prisma/client';

import {
  type QuantitySelectorContextData,
  type ProductVariantContextData,
  useQuantitySelector,
  useProductVariant,
} from './index';

interface ProductOrderContextData {
  product: Product;
  quantitySelector: QuantitySelectorContextData;
  productVariant: ProductVariantContextData;
}

interface Props {
  product: Product;
}

const ProductOrderContext = createContext({} as ProductOrderContextData);

export const ProductOrderContextProvider: React.FC<
  PropsWithChildren<Props>
> = props => {
  const { product, children } = props;

  const quantitySelector = useQuantitySelector(1);

  const productVariant = useProductVariant();

  return (
    <ProductOrderContext.Provider
      value={{ product, quantitySelector, productVariant }}
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
