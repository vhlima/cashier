import clsx from 'clsx';

import { Link, Typography } from '@/components';

import type { Category as CategoryProps } from '@/views/MenuCategory/categories';

interface Props extends CategoryProps {
  isActive?: boolean;
}

export const MenuCategory: React.FC<Props> = props => {
  const { name, route, icon: Icon, isActive } = props;

  return (
    <Link
      className={clsx('flex flex-col items-center rounded-xl p-2', {
        'bg-white': !isActive,
        'bg-yellow': isActive,
      })}
      href={route}
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
        />
      </div>

      <Typography
        className="my-4"
        component="span"
        color={!isActive ? 'secondary' : undefined}
      >
        {name}
      </Typography>
    </Link>
  );
};
