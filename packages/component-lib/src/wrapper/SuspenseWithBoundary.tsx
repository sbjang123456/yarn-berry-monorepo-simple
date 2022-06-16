import type { PropsWithChildren } from 'react';
import { Suspense, SuspenseProps } from 'react';
import { ErrorBoundary, ErrorBoundaryProps } from 'react-error-boundary';

// export interface SuspenseWithBoundaryProps {}

export const SuspenseWithBoundary = ({ children }: PropsWithChildren) => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <ErrorBoundary fallback={<div>error!!</div>}>{children}</ErrorBoundary>
    </Suspense>
  );
};
