import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { inferRouterInputs } from '@trpc/server';
import superjson from 'superjson'
import { AppRouter } from '../../../server/src'

export const api = createTRPCProxyClient<AppRouter>({
  transformer: superjson,
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});

export type RouterInputs = inferRouterInputs<AppRouter>;