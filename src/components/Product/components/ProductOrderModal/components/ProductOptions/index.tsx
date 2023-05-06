import { type HTMLAttributes } from 'react';

import { ProductOption } from './components';

import { api } from '@/utils/api';

interface Props extends HTMLAttributes<HTMLDivElement> {
  productId: string;
}

export const ProductOptions: React.FC<Props> = props => {
  const { productId } = props;

  const { data, isLoading } = api.product.getProductOptions.useQuery({
    productId,
  });

  if (!data || isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data.map(option => (
        <ProductOption key={`product-options-${option.id}`} {...option} />
      ))}
    </div>
  );
};
