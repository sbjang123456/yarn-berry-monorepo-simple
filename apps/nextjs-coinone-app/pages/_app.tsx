import { DefaultSeo } from 'next-seo';

/* next, react */
import type { AppProps } from 'next/app';
import { useState } from 'react';

/* lib ,components */
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';
import { Header } from '@/components/Header';
import { GlobalStyle } from '../globalStyle';
import SEO from '../next-seo.config';

/* style */
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle />
        <DefaultSeo {...SEO} />
        <Header />
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
