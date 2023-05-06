import { type HTMLAttributes } from 'react';

import clsx from 'clsx';

import { Typography } from '@/components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

export const ProductOptionsHeader: React.FC<Props> = props => {
  const { className, title, description, ...rest } = props;

  return (
    <div
      className={clsx('bg-slate-100 px-4 py-2', className && className)}
      {...rest}
    >
      <Typography className="font-bold" component="h2">
        {title}
      </Typography>
      <Typography component="span" size="sm">
        {description}
      </Typography>
    </div>
  );
};
