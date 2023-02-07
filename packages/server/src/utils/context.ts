import { type CreateNextContextOptions } from '@trpc/server/adapters/next';
import { type Session } from 'next-auth';

import { getServerAuthSession } from './auth';
import { prisma } from './db';

type ContextOptions = {
  session: Session | null;
};

export const createInnerContext = (opts: ContextOptions) => {
  return {
    session: opts.session,
    prisma,
  };
};

export const createContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;

  const session = await getServerAuthSession({ req, res });

  return createInnerContext({
    session,
  });
};

export type Context = ReturnType<typeof createInnerContext>;
