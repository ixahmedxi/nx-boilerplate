import type { NextPage } from 'next';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const {
    data: greeting,
    isError: greetingIsError,
    error: greetingErrors,
  } = trpc.greeting.hello.useQuery({ name: 'John' });

  const isData = greeting;
  const isError = greetingIsError;

  if (isError) {
    return (
      <main>
        <h1>Error</h1>
        <pre>{JSON.stringify(greetingErrors, null, 2)}</pre>
      </main>
    );
  }

  if (isData) {
    <main>
      <h1>{greeting.message}</h1>
    </main>;
  }

  return (
    <main>
      <h1>Hello World</h1>
    </main>
  );
};

export default Home;
