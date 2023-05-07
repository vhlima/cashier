import { NewProductTag } from './components';

import { ProductImage, ProductInfo } from '@/components/Product';

interface Props {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  isNew?: boolean;
}

export const ProductDisplay: React.FC<Props> = props => {
  const { isNew, ...product } = props;

  const { name, imageUrl } = product;

  return (
    <div
      className="relative rounded-sm border border-gray-100 bg-white shadow-sm transition-colors hover:border-gray-200"
      data-testid="product"
    >
      {isNew && <NewProductTag />}

      <div className="flex gap-4 p-4">
        <ProductImage src={imageUrl} alt={name} />

        <ProductInfo {...product} />
      </div>
    </div>
  );
};
