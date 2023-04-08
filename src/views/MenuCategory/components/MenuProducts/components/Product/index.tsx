import { motion } from 'framer-motion';

import type { Product } from '../../products';

import { NewProductTag, ProductDetails, ProductImage } from './components';

interface Props extends Product {
  displayOrder: number;
  isNew?: boolean;
}

export const MenuProduct: React.FC<Props> = props => {
  const { displayOrder, name, price, displayImageUrl, isNew } = props;

  return (
    <motion.li
      className="relative flex flex-col items-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: displayOrder * 0.01 }}
      data-testid="menu-product"
    >
      {isNew && <NewProductTag />}

      <ProductImage src={displayImageUrl} alt={name} />

      <ProductDetails name={name} price={price} />
    </motion.li>
  );
};
