import { useState, type ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  asd?: string;
}

export const RadioButton: React.FC<Props> = props => {
  const { asd, ...rest } = props;

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <button
      className={clsx(
        'mx-2 flex h-6 w-6 cursor-pointer items-center justify-center space-x-2 rounded-full transition-colors',
        {
          'bg-red': isChecked,
          'border border-gray-200 bg-white-low': !isChecked,
        },
      )}
      onClick={handleChange}
    >
      <div
        className={`h-1/2 w-1/2 rounded-full ${
          isChecked ? 'bg-white-low' : 'bg-transparent'
        }`}
      ></div>
      <input
        type="radio"
        id={asd}
        className="hidden"
        checked={isChecked}
        readOnly
      />
    </button>
  );
};
