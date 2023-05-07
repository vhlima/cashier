import { ProductInfo } from '@/components/Product';

import { useProductOrder } from '../../hooks';

import { ProductOptions, SpecialInstructions } from '../index';

export const ProductDetailsScrollable: React.FC = () => {
  const { product } = useProductOrder();

  return (
    <div className="relative flex flex-col gap-4">
      <ProductInfo {...product} />

      <ProductOptions
        productId={product.id}
        activeSection={activeSection}
        addOptionReference={addSectionReference}
      />

      <SpecialInstructions />
    </div>
  );
};
