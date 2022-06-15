/* next */
import type { FC } from 'react';

/* components */
import { MainRank } from './MainRank';

/* style */
import { cssMainContent } from './Main.style';

export const Main: FC = () => {
  return (
    <>
      <section css={cssMainContent}>
        <MainRank />
      </section>
    </>
  );
};
