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
      className="relative rounded-sm border border-gray-100 bg-white shadow-sm hover:border-gray-200"
      data-testid="menu-product"
      {...animationProps}
    >
      {isNew && <NewProductTag />}

      <button className="flex gap-4 p-4" type="button">
        <ProductImage src={imageUrl} alt={name} />

        <ProductDetails name={name} description={description} price={price} />
      </button>
    </motion.li>
  );
};
