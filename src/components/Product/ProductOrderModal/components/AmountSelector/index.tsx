import { type HTMLAttributes } from 'react';

import clsx from 'clsx';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { AmountSelectorButton } from './components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  quantity: number;
  canIncrease?: boolean;
  increase: () => void;
  decrease: () => void;
}

export const AmountSelector: React.FC<Props> = props => {
  const {
    className,
    quantity,
    canIncrease = true,
    increase,
    decrease,
    ...rest
  } = props;

  return (
    <div
      className={clsx(
        'flex items-center justify-center gap-4',
        className && className,
      )}
      {...rest}
    >
      {quantity > 0 && (
        <>
          <AmountSelectorButton icon={AiOutlineMinus} onClick={decrease} />

          <span className="w-fit px-2">{quantity}</span>
        </>
      )}

      <AmountSelectorButton
        icon={AiOutlinePlus}
        onClick={increase}
        disabled={!canIncrease}
      />
    </div>
  );
};
