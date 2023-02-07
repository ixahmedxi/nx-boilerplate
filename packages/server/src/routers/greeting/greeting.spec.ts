import type { inferRouterInputs } from '@trpc/server';
import type { Context } from '../../utils/context';
import { createInnerContext } from '../../utils/context';
import { greetingRouter } from './greeting.router';

describe('greeting router', () => {
  let ctx: Context;
  let caller: ReturnType<typeof greetingRouter.createCaller>;

  beforeEach(() => {
    ctx = createInnerContext({ session: null });
    caller = greetingRouter.createCaller(ctx);
  });

  it('should output Hello world with no input', async () => {
    const result = await caller.hello();

    expect(result).toStrictEqual({
      message: 'Hello world',
    });
  });

  it('should output Hello name with input', async () => {
    const input: inferRouterInputs<typeof greetingRouter>['hello'] = {
      name: 'John',
    };

    const result = await caller.hello(input);

    expect(result).toStrictEqual({
      message: 'Hello John',
    });
  });
});
