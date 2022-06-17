import { Spin } from 'antd';
import type { PropsWithChildren, ReactElement } from 'react';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export interface SuspenseWithBoundaryProps {
  loadingComponent?: ReactElement;
  errorComponent?: ReactElement;
}

export const SuspenseWithBoundary = ({
  children,
  loadingComponent = <Spin />,
  errorComponent = <div>error!</div>,
}: PropsWithChildren<SuspenseWithBoundaryProps>) => {
  return (
    <Suspense fallback={loadingComponent}>
      <ErrorBoundary fallback={errorComponent}>{children}</ErrorBoundary>
    </Suspense>
  );
};
