import { type PropsWithChildren, createContext, useContext } from 'react';

import { useQuantitySelector } from './index';

interface ProductOrderContextData {
  quantity: number;
  increase: () => void;
  decrease: () => void;
}

const ProductOrderContext = createContext({} as ProductOrderContextData);

export const ProductOrderContextProvider: React.FC<
  PropsWithChildren
> = props => {
  const { children } = props;

  const quantitySelector = useQuantitySelector();

  return (
    <ProductOrderContext.Provider value={{ ...quantitySelector }}>
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