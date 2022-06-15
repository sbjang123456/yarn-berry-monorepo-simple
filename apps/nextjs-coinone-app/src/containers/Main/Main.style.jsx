import { css } from '@emotion/react';

export const cssMainContent = css`
  margin: 50px auto;
  max-width: 1024px;
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
