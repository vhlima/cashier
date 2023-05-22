import { api } from '@/utils/api';

import {
  MenuCategories,
  MenuHeader,
  MenuProducts,
  MenuProductsHeader,
} from './components';

interface Props {
  productTypeName: string;
}

export const MenuCategory: React.FC<Props> = props => {
  const { productTypeName } = props;

  const { data: productTypeData } = api.product.getProductTypeByName.useQuery({
    productTypeName,
  });

  if (!productTypeData) {
    return null;
  }

  return (
    <div className="mt-14 px-14">
      <MenuHeader />

      <MenuCategories selectedCategory={productTypeData.name} />

      <MenuProductsHeader />

      <MenuProducts productTypeId={productTypeData.id} />
    </div>
  );
};
