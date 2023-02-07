import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import type { Context } from './utils/context';

export const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const procedure = t.procedure;
