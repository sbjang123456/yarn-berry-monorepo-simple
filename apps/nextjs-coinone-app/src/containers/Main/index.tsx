/* next */
import type { FC } from 'react';

/* components */
import { MainCarouselText } from './MainCarouselText';
import { MainRank } from './MainRank';

/* style */
import { ContentWrap } from '../../style/common';

export const Main: FC = () => {
  return (
    <>
      <MainCarouselText />
      <ContentWrap>
        <MainRank />
      </ContentWrap>
    </>
  );
};
