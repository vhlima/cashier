import { useProductOrder } from '../../hooks';

import { AmountSelector, AddToCartButton } from '../index';

export const ProductOrderControls: React.FC = () => {
  const { quantitySelector } = useProductOrder();

  return (
    <div className="sticky bottom-0 flex flex-col gap-4 bg-white py-4 lg:flex-row">
      <AmountSelector
        className="w-full border border-gray-200"
        {...quantitySelector}
      />

      <AddToCartButton />
    </div>
  );
};
