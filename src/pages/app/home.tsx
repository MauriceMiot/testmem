import type { NextPage, GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Home } from '@/screens';
import { Layout } from '@/components';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<any> = async () => ({
  props: {
    ...(await serverSideTranslations('en', ['common'])),
  },
});

export default HomePage;
