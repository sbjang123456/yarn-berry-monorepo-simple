import { useCallback } from 'react';
import { exampleCount } from '@/recoil/example';
import { useRecoilState } from 'recoil';

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
