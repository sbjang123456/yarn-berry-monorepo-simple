import React from 'react';
import { exampleCount } from '@/recoil/example';
import { useRecoilValue } from 'recoil';

const ThirdContainer = () => {
  const count = useRecoilValue(exampleCount);

  return <div>{count}</div>;
};

export default ThirdContainer;
