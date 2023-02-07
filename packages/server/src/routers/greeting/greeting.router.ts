import { z } from 'zod';
import { createTRPCRouter, procedure } from '../../trpc';

export const greetingRouter = createTRPCRouter({
  hello: procedure
    .input(z.object({ name: z.string().optional() }).optional())
    .query(({ input }) => {
      return {
        message: `Hello ${input?.name ?? 'world'}`,
      };
    }),
});
