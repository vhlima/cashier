import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';

export const storeRouter = createTRPCRouter({
  getStoreTypes: publicProcedure.query(({ ctx }) =>
    ctx.prisma.storeCategory.findMany(),
  ),
});
