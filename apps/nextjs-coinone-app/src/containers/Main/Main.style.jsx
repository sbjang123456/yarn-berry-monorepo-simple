import { css } from '@emotion/react';

export const cssMainCarouselText = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 274px;
  background-color: #000;
  width: 100vw;
  padding: 30px 0 40px;
`;

export const cssMainCarouselInner = css`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 18px;
  width: 700px;
  margin: 0 auto;
  gap: 15px;
  span {
    color: #fff;
  }
  .cover {
    width: 50px;
    height: 18px;
    background: linear-gradient(to right, #ffffff00, #000);
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const cssMainCarouselDown = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: 1px solid #fff;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
  line-height: 24px;
  span {
    transform: rotate(90deg);
    cursor: pointer;
  }
`;

export const cssMainCarouselList = css`
  position: absolute;
  background-color: #fff;
  left: 0;
  top: 30px;
  z-index: 20;
  padding: 15px 30px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
`;

/* MainCarousel */

export const cssMainCarouselWrap = css`
  height: 160px;
  max-width: 550px;
  .dots {
    bottom: -23px;
    margin-bottom: 0;
  }
`;

export const cssMainCarouselContent = css`
  display: flex !important;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  h2,
  h5 {
    color: #fff;
    margin-bottom: 0;
    line-height: 180%;
  }
`;

/* MainRank */

export const cssMainRankTitle = css`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  div {
    font-size: 20px;
    font-weight: 900;
  }
`;

export const cssMainRankTable = css`
  border-radius: 4px;
  box-shadow: 0 3px 10px 0 rgb(66 66 66 / 5%);
  border: 1px solid #e4e5e8;
  font-size: 14px;
  .table-name {
    h3 {
      font-weight: 700;
      text-transform: uppercase;
      margin: 0 0 5px 0;
    }
    h6 {
      max-width: 103px;
      font-size: 10px;
      color: #79818f;
      margin: 0;
    }
  }
  .table-gray {
    color: #79818f;
  }
`;
