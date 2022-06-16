/* next */
import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* codes */
import { HEADER_MENU } from '../../../constants/codes';

/* components */
import { Button } from '../Button';
/* style */
import { cssHeaderWrap, cssMenuWrap } from './Header.style';

export const Header: FC = () => {
  return (
    <div css={cssHeaderWrap}>
      <div css={cssMenuWrap}>
        <Image src="/coinone_logo_blue.svg" width="157" height="28" />
        <div>
          {HEADER_MENU.map((menu, idx) => (
            <Link href="#" key={idx}>
              {menu}
            </Link>
          ))}
        </div>
      </div>
      <div css={cssMenuWrap}>
        <Image src="/gnb-icon.webp" width="64" height="52" />
        <Button text="회원가입" />
        <Button text="로그인" />
      </div>
    </div>
  );
};
