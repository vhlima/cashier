import { motion, type HTMLMotionProps } from 'framer-motion';

import { isBrowser } from '@/utils';

import { NewProductTag, ProductDetails, ProductImage } from './components';

interface Props {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  displayOrder: number;
  isNew?: boolean;
}

export const MenuProduct: React.FC<Props> = props => {
  const { displayOrder, name, description, price, imageUrl, isNew } = props;

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
      className="relative flex gap-4 rounded-sm bg-white p-4 shadow-sm"
      data-testid="menu-product"
      {...animationProps}
    >
      {isNew && <NewProductTag />}

      <ProductImage src={imageUrl} alt={name} />

      <ProductDetails name={name} description={description} price={price} />
    </motion.li>
  );
};
