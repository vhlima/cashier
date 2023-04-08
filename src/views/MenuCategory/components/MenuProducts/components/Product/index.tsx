import { motion, type HTMLMotionProps } from 'framer-motion';

import { isBrowser } from '@/utils';

import type { Product } from '../../products';

import { NewProductTag, ProductDetails, ProductImage } from './components';

interface Props extends Product {
  displayOrder: number;
  isNew?: boolean;
}

export const MenuProduct: React.FC<Props> = props => {
  const { displayOrder, name, price, displayImageUrl, isNew } = props;

  const animationProps: HTMLMotionProps<'li'> = isBrowser()
    ? {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
        transition: { duration: 0.5, delay: displayOrder * 0.05 },
      }
    : {};

  return (
    <motion.li
      className="relative flex flex-col items-center"
      data-testid="menu-product"
      {...animationProps}
    >
      {isNew && <NewProductTag />}

      <ProductImage src={displayImageUrl} alt={name} />

      <ProductDetails name={name} price={price} />
    </motion.li>
  );
};
