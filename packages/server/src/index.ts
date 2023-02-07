import { appRouter } from './routers/_app';
export { authOptions } from './utils/auth';
export { createContext } from './utils/context';
export { appRouter };

export type AppRouter = typeof appRouter;
