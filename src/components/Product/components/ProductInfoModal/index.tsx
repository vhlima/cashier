import { Modal } from '@/components';

import { ProductImage } from '../ProductImage';

import { ProductDetails } from '../ProductDetails';

import { useProduct } from '../../hooks/useProduct';

interface Props {
  onClose: () => void;
}

export const ProductInfoModal: React.FC<Props> = props => {
  const { onClose } = props;

  const { product } = useProduct();

  const { name, imageUrl } = product;

  return (
    <Modal className="rounded-md bg-white p-4" center onClickBackdrop={onClose}>
      <ProductImage src={imageUrl} alt={name} />

      <ProductDetails {...product} />
    </Modal>
  );
};
