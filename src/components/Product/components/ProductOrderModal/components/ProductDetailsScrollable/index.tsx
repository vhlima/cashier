import { useProduct } from '@/components/Product/hooks';
import { ProductDetails } from '../../../ProductDetails';
import { useScrollSection } from '../../hooks';
import { ProductOptions } from '../ProductOptions';
import { SpecialInstructions } from '../SpecialInstructions';

export const ProductDetailsScrollable: React.FC = () => {
  const { product } = useProduct();

  const { activeSection, addSectionReference, containerRef, handleScroll } =
    useScrollSection();

  return (
    <div
      className="relative flex max-h-[24rem] flex-col gap-4 overflow-y-scroll"
      onScroll={handleScroll}
      ref={containerRef}
    >
      <ProductDetails {...product} />

      <ProductOptions
        productId={product.id}
        activeSection={activeSection}
        addOptionReference={addSectionReference}
      />

      <SpecialInstructions />
    </div>
  );
};
