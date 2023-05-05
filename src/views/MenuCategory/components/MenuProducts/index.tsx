import { motion, type HTMLMotionProps } from 'framer-motion';

import { api } from '@/utils/api';

import { Product } from '@/components';

import { isBrowser } from '@/utils';

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

  function generateAnimationProps(displayOrder: number): HTMLMotionProps<'li'> {
    return isBrowser()
      ? {
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 50 },
          transition: { duration: 0.5, delay: displayOrder * 0.05 },
        }
      : {};
  }

  return (
    <ul className="my-12 flex flex-wrap gap-12" data-testid="menu-products">
      {productsData.map((product, index) => (
        <motion.li
          key={`menu-product-${product.name}`}
          {...generateAnimationProps(index)}
        >
          <Product {...product} />
        </motion.li>
      ))}
    </ul>
  );
};
