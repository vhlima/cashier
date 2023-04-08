import clsx from 'clsx';

import { Link, Typography } from '@/components';

import type { NavigationItem as NavigationItemProps } from '../../navigationItems';

interface Props extends NavigationItemProps {
  isActive?: boolean;
}

export const NavigationItem: React.FC<Props> = props => {
  const { name, icon: Icon, route, isActive } = props;

  return (
    <Link
      className={clsx(
        'flex w-full flex-col items-center justify-center rounded-xl px-4 py-2',
        {
          'bg-red text-white shadow-pink': isActive,
        },
      )}
      href={route}
      data-testid={!isActive ? 'navigation-item' : 'navigation-item-active'}
    >
      <Icon
        className={clsx({
          'text-grey-300': !isActive,
        })}
        size={32}
        data-testid="navigation-item-icon"
      />

      <Typography
        className="mt-2"
        component="span"
        size="sm"
        color={!isActive ? 'secondary' : undefined}
        data-testid="navigation-item-name"
      >
        {name}
      </Typography>
    </Link>
  );
};
