import { BsChevronLeft } from 'react-icons/bs';

import { Typography } from '@/components';

interface Props {
  productName: string;
  onClose: () => void;
}

export const Header: React.FC<Props> = props => {
  const { productName, onClose } = props;

  return (
    <div className="sticky top-0 z-20 flex items-center justify-center bg-white py-4">
      <button className="absolute left-2" onClick={onClose}>
        <BsChevronLeft className="text-red" size={30} />
      </button>

      <Typography className="font-medium uppercase" component="h1">
        {productName}
      </Typography>
    </div>
  );
};
