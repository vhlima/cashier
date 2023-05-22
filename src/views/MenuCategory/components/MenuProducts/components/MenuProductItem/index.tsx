import { motion, type HTMLMotionProps } from 'framer-motion';

import { type PropsWithChildren } from 'react';

import { isBrowser } from '@/utils';

import { useProductOrderModal } from '@/hooks';

interface Props {
  productId: string;
  displayOrder: number;
}

export const MenuProductItem: React.FC<PropsWithChildren<Props>> = props => {
  const { displayOrder, productId, children } = props;

  const { openModal } = useProductOrderModal();

  const animationProps: HTMLMotionProps<'li'> = isBrowser()
    ? {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
        transition: { duration: 0.5, delay: displayOrder * 0.05 },
      }
    : {};

  return (
    <motion.li {...animationProps}>
      <button onClick={() => openModal(productId)}>{children}</button>
    </motion.li>
  );
};
