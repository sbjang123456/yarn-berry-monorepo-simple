import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import ExamplePage from '@/container/example/ExamplePage';

const Example: NextPage = () => {
  return (
    <>
      <NextSeo title="react-query-example" description="with suspense" />
      <ExamplePage />
    </>
  );
};

export default Example;
