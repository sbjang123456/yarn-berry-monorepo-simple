import styled from '@emotion/styled';
import { SuspenseWithBoundary } from '@sb/component-lib/wrapper';
import { Col, Row, Slider } from 'antd';
import { useQuery } from 'react-query';

const timeoutQueryFn = (timeout: number) => () => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`test${timeout}`);
    }, timeout);
  });
};

const TestWrapper = styled.div`
  //width: 50%;
  background-color: ${({ color }) => color};
`;

const TestComponent = ({
  timeout,
  color,
}: {
  timeout: number;
  color: string;
}) => {
  const { data } = useQuery([`test`, timeout], timeoutQueryFn(timeout));
  return <TestWrapper color={color}>{data}</TestWrapper>;
};

const DivWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 500px;
  border: 1px solid #000;
  flex-wrap: wrap;
`;

const ExamplePage = () => {
  return (
    <DivWrapper>
      <SuspenseWithBoundary>
        <TestComponent timeout={1000} color="red" />
      </SuspenseWithBoundary>
      <SuspenseWithBoundary>
        <TestComponent timeout={2000} color="green" />
      </SuspenseWithBoundary>
      <SuspenseWithBoundary>
        <TestComponent timeout={3000} color="blue" />
      </SuspenseWithBoundary>
      <SuspenseWithBoundary>
        <TestComponent timeout={4000} color="yellow" />
      </SuspenseWithBoundary>
    </DivWrapper>
  );
};

export default ExamplePage;
