import styled from '@emotion/styled';

/* SECTION */
export const ContentWrap = styled.section`
  margin: 50px auto;
  max-width: 1024px;
`;

/* BOX CONTENT */
export const LineBox = styled.div<{ allagree: boolean }>`
  color: ${(props) => (props.allagree ? '#1772f8' : '#000000')};
  border: 1px solid;
  border-radius: 8px;
  transition: border-color 0.25s;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 56px;
  padding: 20px;
  margin-bottom: 32px;
  gap: 10px;
  cursor: pointer;
`;

/* BUTTON */
export const MaxButton = styled.div`
  button {
    width: 100%;
    height: 55px;
    padding: 0;
    line-height: 55px;
    font-weight: 700;
    border-radius: 8px;
  }
`;

/* FLEX BOX STYLE */
export const FlexBetweenBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  label {
    width: 100%;
  }
`;
