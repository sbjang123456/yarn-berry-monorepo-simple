/* next */
import type { FC } from 'react';
import { useState } from 'react';

/* codes */
import { MAIN_CAROUSEL } from '../../../constants/codes';

/* style */
import {
  cssMainCarouselText,
  cssMainCarouselInner,
  cssMainCarouselDown,
  cssMainCarouselList,
} from './Main.style';

/* components */
import { MainCarousel } from './MainCarousel';

export const MainCarouselText: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div css={cssMainCarouselText}>
      <div css={cssMainCarouselInner}>
        <button css={cssMainCarouselDown} onClick={() => setOpen(!open)}>
          <span>&gt;</span>
        </button>
        {open && (
          <div css={cssMainCarouselList}>
            {MAIN_CAROUSEL.map((item, idx) => (
              <div key={idx}>{item.title}</div>
            ))}
          </div>
        )}
        {MAIN_CAROUSEL.map((item, idx) => (
          <span key={idx}>{item.title}</span>
        ))}
        <div className="cover"></div>
      </div>
      <MainCarousel />
    </div>
  );
};
