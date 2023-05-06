import { type HTMLAttributes } from 'react';

import { ProductOption } from './components';

import { api } from '@/utils/api';

interface Props extends HTMLAttributes<HTMLDivElement> {
  productId: string;
  activeSection: number;
  addOptionReference: (ref: HTMLDivElement | null) => void;
}

export const ProductOptions: React.FC<Props> = props => {
  const { productId, activeSection, addOptionReference } = props;

  const { data, isLoading } = api.product.getProductOptions.useQuery({
    productId,
  });

  if (!data || isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data.map((option, index) => (
        <ProductOption
          key={`product-options-${option.id}`}
          sticky={activeSection === index}
          ref={ref => addOptionReference(ref)}
          {...option}
        />
      ))}
    </div>
  );
};
