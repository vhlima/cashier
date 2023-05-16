import { type ButtonHTMLAttributes } from 'react';

import { type IconType } from 'react-icons';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

export const AmountSelectorButton: React.FC<Props> = props => {
  const { icon: IconElement, ...rest } = props;

  return (
    <button
      className="group flex w-full justify-center p-2 disabled:cursor-not-allowed"
      type="button"
      {...rest}
    >
      <IconElement
        className="text-red group-disabled:text-opacity-50"
        size={20}
      />
    </button>
  );
};
