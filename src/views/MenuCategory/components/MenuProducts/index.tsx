import { api } from '@/utils/api';

import { ProductOrderModalContextProvider } from '@/hooks';

import { ProductDisplay } from '@/components';

import { MenuProductItem } from './components';

interface Props {
  productTypeId: string;
}

export const MenuProducts: React.FC<Props> = props => {
  const { productTypeId } = props;

  const { data: productsData } = api.product.getAllByTypeId.useQuery({
    productTypeId,
  });

  if (!productsData) {
    return null;
  }

  return (
    <>
      <ProductOrderModalContextProvider>
        <ul className="my-12 flex flex-wrap gap-12" data-testid="menu-products">
          {productsData.map((product, index) => (
            <MenuProductItem
              key={`menu-product-${product.name}`}
              displayOrder={index}
              productId={product.id}
            >
              <ProductDisplay {...product} />
            </MenuProductItem>
          ))}
        </ul>
      </ProductOrderModalContextProvider>
    </>
  );
};
