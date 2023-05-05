import { Modal } from '@/components';

import { ProductImage } from '../ProductImage';

import { ProductDetails } from '../ProductDetails';

import { useProduct } from '../../hooks/useProduct';

import {
  AddToCartButton,
  AmountSelector,
  Header,
  ProductOptions,
  SpecialInstructions,
} from './components';

import { ProductOrderContextProvider, useQuantitySelector } from './hooks';

interface Props {
  onClose: () => void;
}

export const ProductOrderModal: React.FC<Props> = props => {
  const { onClose } = props;

  const { product } = useProduct();

  const { name, imageUrl } = product;

  const quantitySelector = useQuantitySelector(1);

  return (
    <Modal className="rounded-md bg-white" center onClickBackdrop={onClose}>
      <Header productName={product.name} onClose={onClose} />

      <div className="flex flex-col gap-4 px-4 lg:flex-row">
        <ProductImage size="lg" src={imageUrl} alt={name} />

        <div className="flex flex-col gap-4">
          <ProductDetails {...product} />

          <ProductOptions />

          <SpecialInstructions />

          <ProductOrderContextProvider>
            <div className="mt-4 grid grid-rows-2 gap-4 lg:grid-cols-2">
              <AmountSelector
                className="w-full border border-gray-200"
                {...quantitySelector}
              />

              <AddToCartButton
                productPrice={product.price}
                quantity={quantitySelector.quantity}
              />
            </div>
          </ProductOrderContextProvider>
        </div>
      </div>
    </Modal>
  );
};
