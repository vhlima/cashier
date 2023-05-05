import { type HTMLAttributes } from 'react';

import clsx from 'clsx';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { Typography } from '@/components';

import { useProductOrder } from '../../hooks';

import { AmountSelectorButton } from './components';

type Props = HTMLAttributes<HTMLDivElement>;

export const AmountSelector: React.FC<Props> = props => {
  const { className, ...rest } = props;

  const { quantity, increase, decrease } = useProductOrder();

  return (
    <div
      className={clsx(
        'flex items-center justify-center gap-4 border border-gray-200 p-2',
        className && className,
      )}
      {...rest}
    >
      <AmountSelectorButton
        icon={AiOutlineMinus}
        onClick={decrease}
        disabled={quantity === 1}
      />

      <Typography className="px-2" component="span" size="lg">
        {quantity}
      </Typography>

      <AmountSelectorButton
        icon={AiOutlinePlus}
        onClick={increase}
        disabled={quantity === 10}
      />
    </div>
  );
};
