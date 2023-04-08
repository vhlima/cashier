import {
  MenuCategories,
  MenuHeader,
  MenuProducts,
  MenuProductsHeader,
} from './components';

import { products } from './components/MenuProducts/products';

interface Props {
  category: string;
}

export const MenuCategory: React.FC<Props> = props => {
  const { category } = props;

  return (
    <div className="mt-14 px-14">
      <MenuHeader />

      <MenuCategories selectedCategory={category} />

      <MenuProductsHeader />

      <MenuProducts products={products} />
    </div>
  );
};
