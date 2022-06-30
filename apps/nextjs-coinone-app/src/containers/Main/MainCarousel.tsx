/* lib */
import { Carousel } from 'antd';

/* next */
import Image from 'next/image';
import type { FC } from 'react';

/* codes */
import { MAIN_CAROUSEL } from '../../../constants/codes';

/* style */
import { cssMainCarouselWrap, cssMainCarouselContent } from './Main.style';

export const MainCarousel: FC = () => {
  return (
    <div css={cssMainCarouselWrap}>
      <Carousel autoplay dots={{ className: 'dots' }} effect="fade">
        {MAIN_CAROUSEL.map((el, idx) => (
          <div key={idx} css={cssMainCarouselContent}>
            <div>
              <h2>{el.title}</h2>
              <h5>{el.desc}</h5>
            </div>
            <Image
              src={`/cover-banner-0${idx}.webp`}
              height="159"
              width="268"
            ></Image>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
