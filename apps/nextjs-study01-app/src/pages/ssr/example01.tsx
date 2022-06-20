import type { NextPage, GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import SsrExampleContainer from '../../container/ssr/SsrExampleContainer';
import { queryFnNav } from '../../fetcher/example/queryFnNav';

const Example01: NextPage = () => {
  return (
    <>
      <SsrExampleContainer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('navExample01', queryFnNav(['1', '2']));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Example01;
