import { NewProductTag, ProductDetails, ProductImage } from './components';

import { ProductContextProvider, useProductModal } from './hooks';

import { ProductOrderModal } from './components';

interface Props {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
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

      <ProductContextProvider product={product}>
        {isModalOpen && <ProductOrderModal onClose={closeModal} />}

        <button className="flex gap-4 p-4" onClick={openModal}>
          <ProductImage src={imageUrl} alt={name} />

          <ProductDetails {...product} />
        </button>
      </ProductContextProvider>
    </div>
  );
};
