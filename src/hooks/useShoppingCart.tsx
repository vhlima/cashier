import { isBrowser } from '@/utils';
import {
  type PropsWithChildren,
  createContext,
  useMemo,
  useContext,
  useState,
  useCallback,
} from 'react';

export type ShoppingCartOptionVariant = {
  variantId: string;
  quantity: number;
};

export type ShoppingCartProductOptions = Record<
  string,
  ShoppingCartOptionVariant[]
>;

export type ShoppingCartProduct = {
  productId: string;
  quantity: number;
  options: ShoppingCartProductOptions;
};

type AddProduct = (productInfo: ShoppingCartProduct) => void;

type RemoveProduct = (productId: string) => void;

export interface ShoppingCartContextData {
  products: ShoppingCartProduct[];
  addProduct: AddProduct;
  removeProduct: RemoveProduct;
}

const ShoppingCartContext = createContext({} as ShoppingCartContextData);

export const ShoppingCartContextProvider: React.FC<
  PropsWithChildren
> = props => {
  const { children } = props;

  const localStorageProducts = isBrowser()
    ? localStorage.getItem('shopping-cart')
    : null;

  const defaultProductsState = localStorageProducts
    ? (JSON.parse(localStorageProducts) as ShoppingCartProduct[])
    : [];

  console.log(
    `default state products? ${JSON.stringify(defaultProductsState)}`,
  );

  const [products, setProducts] =
    useState<ShoppingCartProduct[]>(defaultProductsState);

  const updateLocalStorage = (products: ShoppingCartProduct[]) => {
    localStorage.setItem('shopping-cart', JSON.stringify(products));
  };

  const addProduct: AddProduct = useCallback(
    productInfo => {
      setProducts(existingProducts => {
        const updatedProducts = [...existingProducts];

        const productFoundIndex = updatedProducts.findIndex(
          info => info.productId === productInfo.productId,
        );

        if (productFoundIndex !== -1) {
          updatedProducts[productFoundIndex] = productInfo;
        } else {
          updatedProducts.push(productInfo);
        }

        updateLocalStorage(updatedProducts);
        return updatedProducts;
      });
    },
    [setProducts],
  );

  const removeProduct: RemoveProduct = useCallback(
    productId => {
      setProducts(existingProducts => {
        const updatedProducts = existingProducts.filter(
          info => info.productId !== productId,
        );

        updateLocalStorage(updatedProducts);
        return updatedProducts;
      });
    },
    [setProducts],
  );

  const contextValue = useMemo(
    (): ShoppingCartContextData => ({
      products,
      addProduct,
      removeProduct,
    }),
    [products, addProduct, removeProduct],
  );

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export function useShoppingCart(): ShoppingCartContextData {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    throw new Error('useShoppingCart must be used within an provider');
  }

  return context;
}
