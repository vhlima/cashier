import { MenuProduct } from './components';

import type { Product } from './products';

interface Props {
  products: Product[];
}

export const MenuProducts: React.FC<Props> = props => {
  const { products } = props;

  return (
    <ul className="my-12 flex flex-wrap gap-12" data-testid="menu-products">
      {products.map(product => (
        <MenuProduct key={`menu-product-${product.name}`} {...product} />
      ))}
    </ul>
  );
};
