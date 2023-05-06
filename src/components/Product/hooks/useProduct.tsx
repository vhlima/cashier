import {
  type PropsWithChildren,
  createContext,
  useMemo,
  useContext,
} from 'react';

type ProductData = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

interface ProductContextData {
  product: ProductData;
}

const ProductContext = createContext({} as ProductContextData);

export const ProductContextProvider: React.FC<
  PropsWithChildren<ProductContextData>
> = props => {
  const { product, children } = props;

  const contextValue = useMemo(
    (): ProductContextData => ({
      product,
    }),
    [product],
  );

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export function useProduct(): ProductContextData {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProduct must be used within an provider');
  }

  return context;
}
