import type { NextPage } from 'next';
import Layout from '../components/Layout';
import AccountSetting from '@/components/AccountSetting';

const Home: NextPage = () => {
  return (
    <Layout>
        <AccountSetting />
    </Layout>
  );
};

export default Home;
