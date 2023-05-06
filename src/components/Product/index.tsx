import { type Product as IProduct } from '@prisma/client';

import { NewProductTag, ProductDetails, ProductImage } from './components';

import { ProductContextProvider, useProductModal } from './hooks';

import { ProductOrderModal } from './components';

interface Props extends IProduct {
  isNew?: boolean;
}

export const Product: React.FC<Props> = props => {
  const { isNew, ...product } = props;

  const { name, imageUrl } = product;

  const { isModalOpen, openModal, closeModal } = useProductModal();

  return (
    <div
      className="relative rounded-sm border border-gray-100 bg-white shadow-sm transition-colors hover:border-gray-200"
      data-testid="product"
    >
      {isNew && <NewProductTag />}

      {isModalOpen && (
        <ProductContextProvider product={product}>
          <ProductOrderModal onClose={closeModal} />
        </ProductContextProvider>
      )}

      <button className="flex gap-4 p-4" onClick={openModal}>
        <ProductImage src={imageUrl} alt={name} />

        <ProductDetails {...product} />
      </button>
    </div>
  );
};
