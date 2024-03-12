import type { NextPage, GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Register } from '@/screens';

const RegisterPage: NextPage = () => {
  return <Register />;
};

export const getServerSideProps: GetServerSideProps<any> = async () => ({
  props: {
    ...(await serverSideTranslations('en', ['common'])),
  },
});

export default RegisterPage;
