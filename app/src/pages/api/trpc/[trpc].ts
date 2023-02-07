import { createNextApiHandler } from '@trpc/server/adapters/next';

import { env } from '@acme/env';
import { appRouter, createContext } from '@acme/server';

export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
  onError:
    env.NODE_ENV === 'development'
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`,
          );
        }
      : undefined,
});
