import type { GetServerSideProps, NextPage } from 'next';

import { MenuCategory } from '@/views';

/* eslint-disable @typescript-eslint/require-await */
export const getServerSideProps: GetServerSideProps = async context => {
  const { query } = context;

  try {
    const productType = query['productType'];

    if (!productType) {
      throw new Error('Product type not found.');
    }

    return {
      props: {
        productType,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

interface Props {
  productType: string;
}

const ProductCategoryPage: NextPage<Props> = props => {
  const { productType } = props;
  return <MenuCategory category={productType} />;
};

export default ProductCategoryPage;
