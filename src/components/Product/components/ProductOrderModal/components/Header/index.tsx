import { BsChevronLeft } from 'react-icons/bs';

import { Typography } from '@/components';

interface Props {
  productName: string;
  onClose: () => void;
}

export const Header: React.FC<Props> = props => {
  const { productName, onClose } = props;

  return (
    <div className="relative my-4 flex items-center justify-center">
      <button className="absolute left-2" onClick={onClose}>
        <BsChevronLeft className="text-red" size={30} />
      </button>

      <Typography className="font-medium uppercase" component="h1">
        {productName}
      </Typography>
    </div>
  );
};
