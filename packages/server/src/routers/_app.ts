import { t } from '../trpc';
import { greetingRouter } from './greeting/greeting.router';

export const appRouter = t.router({
  greeting: greetingRouter,
});
