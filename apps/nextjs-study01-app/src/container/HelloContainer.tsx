import { useCallGetCoin } from '@sb/core-lib/api/hooks/useCallCoin';
import React from 'react';

const HelloContainer = () => {
  const { data } = useCallGetCoin(10);

  return <div>hihihi!! {data?.length}</div>;
};

export default HelloContainer;
