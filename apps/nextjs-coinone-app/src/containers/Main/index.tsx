/* next */
import type { FC } from 'react';

/* components */
import { MainCarouselText } from './MainCarouselText';
import { MainRank } from './MainRank';

/* style */
import { cssMainContent } from './Main.style';

export const Main: FC = () => {
  return (
    <>
      <MainCarouselText />
      <section css={cssMainContent}>
        <MainRank />
      </section>
    </>
  );
};
