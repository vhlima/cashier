import { type HTMLAttributes } from 'react';

import { BsChevronLeft } from 'react-icons/bs';

type Props = HTMLAttributes<HTMLButtonElement>;

export const ModalCloseButton: React.FC<Props> = props => {
  const { onClick } = props;

  return (
    <button className="absolute left-2" onClick={onClick}>
      <BsChevronLeft className="text-red" size={30} />
    </button>
  );
};
