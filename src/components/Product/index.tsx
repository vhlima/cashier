import {
  NewProductTag,
  ProductDetails,
  ProductImage,
  ProductInfoButton,
} from './components';

interface Props {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isNew?: boolean;
}

export const Product: React.FC<Props> = props => {
  const { name, description, price, imageUrl, isNew } = props;

  return (
    <div
      className="relative rounded-sm border border-gray-100 bg-white shadow-sm transition-colors hover:border-gray-200"
      data-testid="product"
    >
      {isNew && <NewProductTag />}

      <ProductInfoButton className="flex gap-4 p-4" type="button">
        <ProductImage src={imageUrl} alt={name} />

        <ProductDetails name={name} description={description} price={price} />
      </ProductInfoButton>
    </div>
  );
};
