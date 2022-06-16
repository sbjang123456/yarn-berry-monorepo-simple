import { useCallGetCoin } from '@sb/core-lib/api/hooks/useCallCoin';
import React from 'react';

const HelloContainer = () => {
  const { data } = useCallGetCoin();

  return <div>hihihi!! {data?.length}</div>;
};

export default HelloContainer;
