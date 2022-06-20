import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { exampleCount } from '@/states';

const SecondContainer = () => {
  const [count, setCount] = useRecoilState(exampleCount);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count, setCount]);

  return (
    <div>
      <button onClick={handleClick}>Click Test(Recoil)</button>
    </div>
  );
};

export default SecondContainer;
