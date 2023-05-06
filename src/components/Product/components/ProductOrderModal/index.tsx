import { Modal } from '@/components';

import { ProductImage } from '../ProductImage';

import { ProductDetails } from '../ProductDetails';

import { useProduct } from '../../hooks/useProduct';

import {
  Header,
  ProductOptions,
  ProductOrderControls,
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
    <Modal
      className="overflow-y-auto rounded-md bg-white"
      center
      onClickBackdrop={onClose}
    >
      <Header productName={product.name} onClose={onClose} />

      <div className="flex flex-col gap-4 px-4 lg:flex-row">
        <ProductImage size="lg" src={imageUrl} alt={name} />

        <div className="flex flex-col gap-4">
          <ProductDetails {...product} />

          <ProductOptions productId={product.id} />

          <SpecialInstructions />

          <ProductOrderControls productPrice={product.price} />
        </div>
      </div>
    </Modal>
  );
};
