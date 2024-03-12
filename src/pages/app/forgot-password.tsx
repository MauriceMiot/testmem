import type { NextPage, GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ForgotPassword } from '@/screens';

const ForgotPasswordPage: NextPage = () => {
  return <ForgotPassword />;
};

export const getServerSideProps: GetServerSideProps<any> = async () => ({
  props: {
    ...(await serverSideTranslations('en', ['common'])),
  },
});

export default ForgotPasswordPage;
