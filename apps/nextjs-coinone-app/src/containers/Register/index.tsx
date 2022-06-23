/* next */
import { FC } from 'react';

/* components */
import Register01 from './Register01';

/* style */
import { RegisterContentWrap } from './Register.style';

const Index: FC = () => {
  return (
    <RegisterContentWrap>
      <Register01 />
    </RegisterContentWrap>
  );
};

export default Index;
