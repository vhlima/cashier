import type { GetServerSideProps, NextPage } from 'next';

import { MenuCategory } from '@/views';

/* eslint-disable @typescript-eslint/require-await */
export const getServerSideProps: GetServerSideProps = async context => {
  const { query } = context;

  try {
    const category = query['category'];

    if (!category) {
      throw new Error('Category not found.');
    }

    return {
      props: {
        category,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

interface Props {
  category: string;
}

const ProductCategoryPage: NextPage<Props> = props => {
  const { category } = props;
  return <MenuCategory category={category} />;
};

export default ProductCategoryPage;
