import React, { Suspense } from 'react';
import { useQuery } from 'react-query';

const fetcher = () =>
  new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('test');
    }, 3000);
  });

const HelloContainer = () => {
  const { data } = useQuery('test', fetcher, {});
  return <div>{data}</div>;
};

export default HelloContainer;
