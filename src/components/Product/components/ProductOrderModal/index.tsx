import { BsChevronLeft } from 'react-icons/bs';

import { Modal, Typography } from '@/components';

import { ProductImage } from '../ProductImage';

import { ProductDetails } from '../ProductDetails';

import { useProduct } from '../../hooks/useProduct';

import {
  AddToCartButton,
  AmountSelector,
  SpecialInstructions,
} from './components';

interface Props {
  onClose: () => void;
}

export const ProductOrderModal: React.FC<Props> = props => {
  const { onClose } = props;

  const { product } = useProduct();

  const { name, imageUrl } = product;

  return (
    <Modal className="rounded-md bg-white" center onClickBackdrop={onClose}>
      <div className="relative my-4 flex items-center justify-center">
        <button className="absolute left-2" onClick={onClose}>
          <BsChevronLeft className="text-red" size={30} />
        </button>

        <Typography className="font-medium uppercase" component="h1" size="md">
          {name}
        </Typography>
      </div>

      <div className="flex flex-col gap-4 px-4 lg:flex-row">
        <ProductImage size="lg" src={imageUrl} alt={name} />

        <div className="">
          <ProductDetails {...product} />

          <SpecialInstructions />

          <div>
            <AmountSelector className="w-full" />

            <AddToCartButton />
          </div>
        </div>
      </div>
    </Modal>
  );
};
