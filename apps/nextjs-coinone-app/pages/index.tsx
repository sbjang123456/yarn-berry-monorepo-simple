import { Header } from '@/components/Header';
import { Main } from 'containers/Main';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
