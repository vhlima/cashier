import { Modal } from '@/components';

import { ProductImage } from '../ProductImage';

import { useProduct } from '../../hooks/useProduct';

import {
  Header,
  ProductDetailsScrollable,
  ProductOrderControls,
} from './components';

import { ProductOrderContextProvider } from './hooks';

interface Props {
  onClose: () => void;
}

export const ProductOrderModal: React.FC<Props> = props => {
  const { onClose } = props;

  const { product } = useProduct();

  const { name, imageUrl } = product;

  return (
    <Modal className="rounded-md bg-white" center onClickBackdrop={onClose}>
      <Header productName={product.name} onClose={onClose} />

      <div className="flex flex-col gap-4 px-4 pb-4 lg:flex-row">
        <ProductImage size="lg" src={imageUrl} alt={name} />

        <ProductOrderContextProvider>
          <div className="flex flex-col">
            <ProductDetailsScrollable />

            <ProductOrderControls />
          </div>
        </ProductOrderContextProvider>
      </div>
    </Modal>
  );
};
