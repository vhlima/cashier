import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

export const productRouter = createTRPCRouter({
  getProductTypeByName: publicProcedure
    .input(z.object({ productTypeName: z.string() }))
    .query(({ input, ctx }) => {
      const { productTypeName } = input;

      return ctx.prisma.productType.findUniqueOrThrow({
        where: {
          name: productTypeName,
        },
      });
    }),
  getAllProductsByIds: publicProcedure
    .input(z.object({ productsIds: z.array(z.string()).min(1) }))
    .query(({ input, ctx }) => {
      const { productsIds } = input;

      return ctx.prisma.product.findMany({
        where: {
          id: { in: productsIds },
        },
        include: {
          productOptions: {
            include: {
              variants: true,
            },
          },
        },
      });
    }),
  getAllByTypeId: publicProcedure
    .input(z.object({ productTypeId: z.string().nullable() }))
    .query(({ input, ctx }) => {
      const { productTypeId } = input;

      if (!productTypeId) {
        return ctx.prisma.product.findMany({
          orderBy: {
            createdAt: 'desc',
          },
        });
      }

      return ctx.prisma.product.findMany({
        where: {
          productTypeId,
        },
      });
    }),
  getProductWithOptions: publicProcedure
    .input(z.object({ productId: z.string() }))
    .query(({ input, ctx }) => {
      const { productId } = input;

      return ctx.prisma.product.findUnique({
        where: {
          id: productId,
        },
        include: {
          productOptions: {
            include: {
              variants: true,
            },
          },
        },
      });
    }),
  getProductOptions: publicProcedure
    .input(z.object({ productId: z.string() }))
    .query(({ input, ctx }) => {
      const { productId } = input;

      return ctx.prisma.productOption.findMany({
        where: {
          productId,
        },
        include: {
          variants: true,
        },
      });
    }),
});
