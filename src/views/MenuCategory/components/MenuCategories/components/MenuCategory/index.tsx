import clsx from 'clsx';

import { motion, type HTMLMotionProps } from 'framer-motion';

import { Link, Typography } from '@/components';

import { isBrowser } from '@/utils';

import type { Category as CategoryProps } from '@/views/MenuCategory/categories';

interface Props extends CategoryProps {
  displayOrder: number;
  isActive?: boolean;
}

export const MenuCategory: React.FC<Props> = props => {
  const { displayOrder, name, route, icon: Icon, isActive } = props;

  const animationProps: HTMLMotionProps<'div'> = isBrowser()
    ? {
        initial: { opacity: 0, y: 25 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -25 },
        transition: { duration: 0.5, delay: displayOrder * 0.05 },
      }
    : {};

  return (
    <motion.div
      className={clsx('rounded-xl p-2', {
        'bg-white': !isActive,
        'bg-yellow': isActive,
      })}
      data-testid={!isActive ? 'menu-category' : 'menu-category-active'}
      {...animationProps}
    >
      <Link
        className="flex flex-col items-center"
        href={route}
        data-testid="menu-category-link"
      >
        <div
          className={clsx('rounded-xl bg-white p-6', {
            'border border-grey': !isActive,
          })}
        >
          <Icon
            className={clsx({
              'text-grey-300': !isActive,
            })}
            size={32}
            data-testid="menu-category-icon"
          />
        </div>

        <Typography
          className="my-4"
          component="span"
          color={!isActive ? 'secondary' : undefined}
          data-testid="menu-category-name"
        >
          {name}
        </Typography>
      </Link>
    </motion.div>
  );
};
