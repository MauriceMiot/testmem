import type { NextPage, GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Login } from '@/screens';

const LoginPage: NextPage = () => {
  return <Login />;
};

export const getServerSideProps: GetServerSideProps<any> = async () => ({
  props: {
    ...(await serverSideTranslations('en', ['common'])),
  },
});

export default LoginPage;
