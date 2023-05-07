import { type ProductVariant } from '@prisma/client';

import { Modal, ProductInfo } from '@/components';

import { ProductImage } from '@/components/Product/ProductImage';

import {
  Header,
  ProductOptionSection,
  ProductOrderControls,
  SpecialInstructions,
} from './components';

import { ProductOrderContextProvider, useScrollSection } from './hooks';

import { api } from '@/utils/api';
import { Form, Formik } from 'formik';

interface Props {
  productId: string;
  variants?: Array<{
    quantity: number;
    variant: ProductVariant;
  }>;
  onClose: () => void;
}

export const ProductOrderModal: React.FC<Props> = props => {
  const { productId, variants, onClose } = props;

  const { data: product, isLoading } =
    api.product.getProductWithOptions.useQuery({ productId });

  const {
    activeSection,
    addSectionReference,
    referenceContainerRef,
    containerRef,
    handleScroll,
  } = useScrollSection();

  if (!product || isLoading) {
    return (
      <Modal className="rounded-md bg-white" center onClickBackdrop={onClose}>
        <h1>Loading...</h1>
      </Modal>
    );
  }

  const { name, imageUrl } = product;

  return (
    <Modal
      className="overflow-y-scroll rounded-md bg-white lg:max-h-[36rem]"
      center
      onClickBackdrop={onClose}
      onScroll={handleScroll}
      ref={containerRef}
    >
      <Header productName={product.name} onClose={onClose} />

      <div className="flex flex-col gap-4 px-4 pb-4 lg:flex-row">
        <ProductImage
          className="lg:sticky lg:top-0"
          size="lg"
          src={imageUrl}
          alt={name}
        />

        <ProductOrderContextProvider product={product}>
          <div className="flex flex-col" ref={referenceContainerRef}>
            <Formik
              initialValues={{ asd: '' }}
              onSubmit={() => {
                console.log(`submit`);
              }}
            >
              <Form>
                <div className="relative flex flex-col gap-4">
                  <ProductInfo {...product} />

                  <div>
                    {product.productOptions.map((option, index) => (
                      <ProductOptionSection
                        key={`product-options-${option.id}`}
                        ref={ref => addSectionReference(ref)}
                        sticky={activeSection === index}
                        {...option}
                      />
                    ))}
                  </div>

                  <SpecialInstructions />
                </div>

                <ProductOrderControls />
              </Form>
            </Formik>
          </div>
        </ProductOrderContextProvider>
      </div>
    </Modal>
  );
};
