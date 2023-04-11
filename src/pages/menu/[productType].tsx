import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';

import { MenuCategory } from '@/views';

import superjson from 'superjson';

import { createServerSideHelpers } from '@trpc/react-query/server';

import { appRouter } from '@/server/api/root';

import { prisma } from '@/server/db';

interface GetServerSidePropsData {
  productTypeName: string;
}

export const getServerSideProps: GetServerSideProps<
  GetServerSidePropsData
> = async context => {
  const { query } = context;

  try {
    const productTypeName = query['productType'] as string;

    if (!productTypeName) {
      throw new Error('Product type not found.');
    }

    const helper = createServerSideHelpers({
      router: appRouter,
      ctx: {
        prisma,
      },
      transformer: superjson,
    });

    const productTypeExists = await helper.product.getProductTypeByName.fetch({
      productTypeName,
    });

    if (!productTypeExists) {
      throw new Error('Product type not found');
    }

    await helper.product.getAllByTypeId.prefetch({
      productTypeId: productTypeExists.id,
    });

    await helper.product.getProductTypeByName.prefetch({
      productTypeName,
    });

    return {
      props: {
        productTypeName,
        trpcState: helper.dehydrate(),
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const ProductCategoryPage: NextPage<Props> = props => {
  const { productTypeName } = props;

  return <MenuCategory productTypeName={productTypeName} />;
};

export default ProductCategoryPage;
