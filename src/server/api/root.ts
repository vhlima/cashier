import { createTRPCRouter } from '@/server/api/trpc';

import { productRouter, storeRouter } from '@/server/api/routers';

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  product: productRouter,
  store: storeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
