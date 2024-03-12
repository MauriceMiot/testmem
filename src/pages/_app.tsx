import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/theme';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import wrapper from '../store';
import { Toast } from '@/components';
import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { google_client_id } from '@/utils';

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const router = useRouter();
  const [firstRender, setFirstRender] = useState(false);
  const GOOGLE_CLIENT_ID = google_client_id;
  const { auth } = store.getState();

  useEffect(() => {
    if (!firstRender) setFirstRender(true);
    if (auth.isAuth && firstRender) router.push('/app/home');
  }, [auth?.isAuth, firstRender]);

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Toast />
          <Head>
            <title>Memvy</title>
          </Head>
          <Component {...props} />
        </Provider>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
};

export default appWithTranslation(App);
