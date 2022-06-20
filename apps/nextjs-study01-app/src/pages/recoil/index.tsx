import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import RecoilPage from '@/container/recoil/RecoilPage';

const Recoil: NextPage = () => {
  return (
    <>
      <NextSeo title="recoil-example" description="state 3rd party lib" />
      <RecoilPage />
    </>
  );
};

export default Recoil;
