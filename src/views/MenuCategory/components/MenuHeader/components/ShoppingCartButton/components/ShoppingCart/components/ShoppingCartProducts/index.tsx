import { ProductOrderModalContextProvider, useShoppingCart } from '@/hooks';

import { api } from '@/utils/api';

import { ShoppingCartProduct } from '../index';

export const ShoppingCartProducts: React.FC = () => {
  const { products } = useShoppingCart();

  const { data: productsData, isLoading } =
    api.product.getAllProductsByIds.useQuery({
      productsIds: products.map(product => product.productId),
    });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!productsData) {
    return <h1>No products, click here to add.</h1>;
  }

  return (
    <ProductOrderModalContextProvider>
      <ul>
        {products.map(productInfo => {
          const productFound = productsData.find(
            currentProduct => currentProduct.id === productInfo.productId,
          );

          if (!productFound) {
            return null;
          }

          return (
            <ShoppingCartProduct
              key={`shopping-cart-product-${productFound.id}`}
              quantity={productInfo.quantity}
              {...productFound}
            />
          );
        })}
      </ul>
    </ProductOrderModalContextProvider>
  );
};
