import { useProductOrder } from '../../hooks';

import { AmountSelector, AddToCartButton } from '../index';

interface Props {
  productPrice: number;
}

export const ProductOrderControls: React.FC<Props> = props => {
  const { productPrice } = props;

  const { quantitySelector } = useProductOrder();

  return (
    <div className="mt-4 grid grid-rows-2 gap-4 lg:grid-cols-2">
      <AmountSelector
        className="w-full border border-gray-200"
        {...quantitySelector}
      />

      <AddToCartButton
        productPrice={productPrice}
        quantity={quantitySelector.quantity}
      />
    </div>
  );
};
