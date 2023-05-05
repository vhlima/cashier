import { type HTMLAttributes } from 'react';

import clsx from 'clsx';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { Typography } from '@/components';

import { AmountSelectorButton } from './components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  initialQuantity: number;
  quantity: number;
  increase: () => void;
  decrease: () => void;
}

export const AmountSelector: React.FC<Props> = props => {
  const { className, initialQuantity, quantity, increase, decrease, ...rest } =
    props;

  return (
    <div
      className={clsx(
        'flex items-center justify-center gap-4 p-2',
        className && className,
      )}
      {...rest}
    >
      {quantity > 0 && (
        <>
          <AmountSelectorButton
            icon={AiOutlineMinus}
            onClick={decrease}
            disabled={quantity === initialQuantity}
          />

          <Typography className="px-2" component="span" size="lg">
            {quantity}
          </Typography>
        </>
      )}

      <AmountSelectorButton
        icon={AiOutlinePlus}
        onClick={increase}
        disabled={quantity === 10}
      />
    </div>
  );
};
