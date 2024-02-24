import type { NextPage } from 'next';
import Layout from '../components/Layout';
import AccountSetting from '@/components/AccountSetting';
import Footer from '@/components/Footer';

const Home: NextPage = () => {
  return (
    <Layout>
        <AccountSetting />
        <Footer />
    </Layout>
  );
};

export default Home;
