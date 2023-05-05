import { type ButtonHTMLAttributes } from 'react';

import { type IconType } from 'react-icons';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

export const AmountSelectorButton: React.FC<Props> = props => {
  const { icon: IconElement, ...rest } = props;

  return (
    <button className="group px-4 disabled:cursor-not-allowed" {...rest}>
      <IconElement
        className="text-red group-disabled:text-opacity-50"
        size={20}
      />
    </button>
  );
};
