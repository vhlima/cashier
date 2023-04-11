import { api } from '@/utils/api';

import { MenuProduct } from './components';

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
    <ul className="my-12 flex flex-wrap gap-12" data-testid="menu-products">
      {productsData.map((product, index) => (
        <MenuProduct
          key={`menu-product-${product.name}`}
          displayOrder={index}
          {...product}
        />
      ))}
    </ul>
  );
};
