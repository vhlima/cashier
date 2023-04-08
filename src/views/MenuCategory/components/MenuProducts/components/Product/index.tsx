import type { Product } from '../../products';

import { NewProductTag, ProductDetails, ProductImage } from './components';

interface Props extends Product {
  isNew?: boolean;
}

export const MenuProduct: React.FC<Props> = props => {
  const { name, price, displayImageUrl, isNew } = props;

  return (
    <li
      className="relative flex flex-col items-center"
      data-testid="menu-product"
    >
      {isNew && <NewProductTag />}

      <ProductImage src={displayImageUrl} alt={name} />

      <ProductDetails name={name} price={price} />
    </li>
  );
};
