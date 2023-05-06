import { useProductOrder } from '../../hooks';

import { AmountSelector, AddToCartButton } from '../index';

export const ProductOrderControls: React.FC = () => {
  const { quantitySelector } = useProductOrder();

  return (
    <div className="mt-4 flex gap-4">
      <AmountSelector
        className="w-full border border-gray-200"
        {...quantitySelector}
      />

      <AddToCartButton />
    </div>
  );
};
