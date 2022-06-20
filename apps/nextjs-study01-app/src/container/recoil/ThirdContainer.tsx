import React from 'react';
import { useRecoilValue } from 'recoil';
import { exampleCount } from '@/states';

const ThirdContainer = () => {
  const count = useRecoilValue(exampleCount);

  return <div>{count}</div>;
};

export default ThirdContainer;
