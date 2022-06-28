import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const RegisterContentWrap = styled.section`
  margin: 50px auto;
  max-width: 480px;
  .ant-form-item {
    flex-direction: column;
    align-items: flex-start;

    .ant-form-item-control {
      width: 100%;
      .ant-form-item-control-input {
        margin-bottom: 5px;
      }
      .ant-form-item-explain {
        margin-bottom: 15px;
      }
    }

    .ant-radio-group {
      display: flex;
      gap: 10px;
      label {
        flex: auto;
      }
      .ant-radio-button-wrapper {
        text-align: center;
        padding: 10px;
        height: max-content;
        border-radius: 8px;
        border-left-width: 1px;
        &:not(:first-child)::before {
          background-color: #fff0;
        }
      }
    }
    .ant-input {
      height: 50px;
      border-radius: 7px;
    }
  }

  @keyframes showanimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const RegisterCheckBoxWrap = styled.div`
  .ant-form-item {
    flex-direction: column;
  }
`;

export const cssRegisterTitle = css`
  margin-bottom: 32px;
  font-size: 24px;
  font-weight: 700;
`;
