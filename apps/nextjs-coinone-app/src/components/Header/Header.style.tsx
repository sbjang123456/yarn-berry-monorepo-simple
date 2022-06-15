import { css } from '@emotion/react';

export const cssHeaderWrap = css`
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  margin: 0 auto;
`;

export const cssMenuWrap = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    a {
      color: #000;
    }
  }
  button {
    height: 24px;
    padding: 0 8px;
    font-size: 12px;
    color: #79818f;
    background-color: transparent;
    border: 1px solid #aeb3bb;
    border-radius: 5px;
  }
`;
