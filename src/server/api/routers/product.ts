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
