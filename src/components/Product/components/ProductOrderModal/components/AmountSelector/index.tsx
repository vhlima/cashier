import { type HTMLAttributes, useState } from 'react';

import clsx from 'clsx';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { Typography } from '@/components';

import { AmountSelectorButton } from './components';

type Props = HTMLAttributes<HTMLDivElement>;

export const AmountSelector: React.FC<Props> = props => {
  const { className, ...rest } = props;

  const [amount, setAmount] = useState<number>(1);

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
        onClick={() => setAmount(previous => previous - 1)}
        disabled={amount === 1}
      />

      <Typography className="px-2" component="span" size="lg">
        {amount}
      </Typography>

      <AmountSelectorButton
        icon={AiOutlinePlus}
        onClick={() => setAmount(previous => previous + 1)}
        disabled={amount === 10}
      />
    </div>
  );
};
