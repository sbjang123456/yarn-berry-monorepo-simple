/* next */
import type { FC } from 'react';

/* style */
import { ContentWrap } from '../../style/common';

/* components */
import { MainCarouselText } from './MainCarouselText';
import { MainRank } from './MainRank';

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
