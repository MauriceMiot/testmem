'use client';

import { Box, Grid, Typography, Divider, useMediaQuery, Theme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MuiButton, MuiIconButton, MuiTextField } from '@/components';
import { palette } from '@/theme/constants';
import Image from 'next/image';
import { FormikConfig } from './formik';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { loginFacebook, loginGoogle, loginUser, setStep } from '@/store/actions';
import { authSelector, intermitenceSelector } from '@/store/selectors';
import Link from 'next/link';
import { useGoogleLogin } from '@react-oauth/google';
import { google_client_id, face_client_id } from '@/utils';

export const Login = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const authData = useSelector(authSelector);
  const { loading } = useSelector(intermitenceSelector);
  const clientId = google_client_id;
  const dispatch = useDispatch();
  const [firstRender, setFirstRender] = useState(false);

  const handleSubmit = (data: any) => {
    dispatch(loginUser(data));
  };

  const handleOnTouched = (key: string) => setTouched({ ...touched, [key]: true });

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((show) => !show);

  const {
    values,
    handleSubmit: formikSubmit,
    handleChange,
    errors,
    touched,
    setTouched,
    dirty,
    isValid,
  } = FormikConfig(handleSubmit);

  const changeInputStatus = (value: string, error: any) => {
    if (value !== '') {
      if (error) return 'error';
      return 'inherit';
    }
    return 'inherit';
  };

  const initGoogleLogin = useGoogleLogin({
    scope: 'email',
    onSuccess: (tokenResponse: any) => {
      dispatch(loginGoogle(tokenResponse));
    },

    onError: (error: any) => {
      console.log('Login Failed', error);
    },
  });

  useEffect(() => {
    dispatch(setStep(1));
    if (authData?.isAuth) router.push('/app/home');
  }, [authData?.isAuth]);

  useEffect(() => {
    if (firstRender) {
      // Google script Init
      const google = require('gapi-script');
      const start = () => {
        google.gapi?.client.init({
          clientId: clientId,
          scope: 'email',
        });
      };

      google.gapi?.load('client', start);

      let winType: any = window;
      if (winType?.FB) {
        console.log('FB SDK already loaded');
        return;
      }

      // Load the SDK script Facebook
      ((d, s, id) => {
        var js: any,
          fjs: any = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');

      // Initialize the SDK Facebook
      winType.fbAsyncInit = function () {
        winType?.FB?.init({
          appId: face_client_id,
          cookie: true,
          xfbml: true,
          version: 'v14.0',
        });
      };
    }
    if (!firstRender) setFirstRender(true);
  }, [firstRender]);

  const validateIsFaceLogged = () => {
    return new Promise((resolve) => {
      let winType: any = window;
      winType?.FB?.getLoginStatus(function (response: any) {
        if (response?.status === 'connected') {
          resolve(true);
        } else if (response?.status === 'unknown') {
          resolve(false);
        } else {
          console.log('user is not logged in facebook ');
          resolve(false);
        }
      });
    });
  };

  const handleFaceLogin = async () => {
    let winType: any = window;

    const isLogged = await validateIsFaceLogged();

    if (!isLogged) {
      winType?.FB?.login((response: any) => {
        console.log(response, 'response');

        // if (response?.authResponse) {
        //   console.log('Welcome! Fetching your information.... ');
        //   winType.FB.api('/me', function (response: any) {
        //     console.log('Good to see you, ' + response.name + '.');
        //   });
        // } else {
        //   console.log('User cancelled login or did not fully authorize.');
        // }
      });
    }
    return null;
  };

  const logoutWithFacebook = () => {
    return new Promise((resolve) => {
      let winType: any = window;
      winType?.FB?.logout(function (response: any) {
        console.log(response);
        resolve(response);
      });
    });
  };

  return (
    <Box
      display={'flex'}
      height={'100vh'}
      sx={{ backgroundImage: `url(/images/background.svg)` }}
      padding={'0 1rem'}
      width={'100%'}
      justifyContent={'center'}
      alignItems={'center'}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'flex-start'}
        alignItems={'center'}
        width={'29.5rem'}
        height={'36.75rem'}
        borderRadius={'0.5rem'}
        bgcolor={palette.primary}
        padding={isMobile ? '1rem' : '2rem'}
        boxShadow={
          '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)'
        }>
        <Box
          width={'4.875rem'}
          height={'5.25rem'}
          minHeight={'5.25rem'}
          minWidth={'4.875rem'}
          marginBottom={'1rem'}
          position={'relative'}>
          <Image src={`/images/logo.svg`} alt={'background-image'} fill quality={100} />
        </Box>
        <Typography marginBottom={'1rem'} variant='h4' fontWeight={'400'}>
          {t('welcome')}
        </Typography>

        <Typography marginBottom={'1rem'} variant='body2'>
          {t('login_in_portfolio')}
        </Typography>

        <form onSubmit={formikSubmit}>
          <Grid container width={'100%'} marginBottom={'0.5rem'} rowSpacing={2}>
            <Grid item xs={12}>
              <MuiTextField
                id='email'
                name='email'
                fullWidth
                onBlur={() => {
                  handleOnTouched('email');
                }}
                status={changeInputStatus(values.email, errors.email && touched.email)}
                onChange={handleChange}
                value={values.email}
                autoComplete='email'
                placeholder={t('email')}
                label={'email'}
                isDarkTheme
                errorMessage={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <MuiTextField
                id='password'
                name='password'
                fullWidth
                onBlur={() => {
                  handleOnTouched('password');
                }}
                onChange={handleChange}
                value={values.password}
                autoComplete='password'
                placeholder={t('password')}
                label={'password'}
                isDarkTheme
                iconMethod={handleShowPassword}
                iconHeight={18}
                iconWidth={18}
                type={!showPassword ? 'password' : 'text'}
                endIcon={showPassword ? '/icons/eye-white.svg' : '/icons/eye-out-white.svg'}
                errorMessage={errors.password}
                status={changeInputStatus(values.password, errors.password && touched.password)}
              />
            </Grid>

            <Grid item textAlign={'center'} xs={12}>
              <Link href={'/app/forgot-password'}>
                <Typography marginBottom={'2rem'} variant='caption'>
                  {t('forgot_password')}
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <MuiButton type='submit' disabled={!isValid || !dirty || loading} loading={loading} variant={'contained'}>
                <Typography variant='button'>{t('continue')}</Typography>
              </MuiButton>
            </Grid>
            <Grid
              item
              xs={12}
              display={'flex'}
              flexDirection={isMobile ? 'column' : 'row'}
              justifyContent={'center'}
              alignItems={isMobile ? 'center' : 'flex-start'}
              marginBottom={'0.5rem'}>
              <Typography variant='caption'>{t('dont_have_account')}</Typography>
              <Link href={'/app/register'}>
                <Typography variant='caption' marginLeft={isMobile ? 0 : '0.375rem'} color={palette.secondary}>
                  {t('create_profile')}
                </Typography>
              </Link>
            </Grid>

            <Grid
              item
              xs={12}
              display={'flex'}
              width={'100%'}
              marginBottom={'0.5rem'}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <Divider sx={{ border: `0.063rem solid ${palette.white}`, width: '35%' }} />
              <Typography variant={isMobile ? 'body2' : 'body1'}>{t('or_login')}</Typography>
              <Divider sx={{ border: `0.063rem solid ${palette.white}`, width: '35%' }} />
            </Grid>
          </Grid>
        </form>
        <Box display={'flex'} width={isMobile ? '55%' : '35%'} justifyContent={'space-between'}>
          <MuiIconButton
            icon={'/images/google'}
            altIcon='google'
            background='transparent'
            iconHeight={32}
            iconWidth={32}
            method={() => initGoogleLogin()}
          />

          <MuiIconButton
            icon={'/images/facebook'}
            altIcon='facebook'
            background='transparent'
            iconHeight={32}
            iconWidth={32}
            method={handleFaceLogin}
          />

          <MuiIconButton
            icon={'/icon/settings'}
            altIcon='facebook'
            background='transparent'
            iconHeight={32}
            iconWidth={32}
            method={logoutWithFacebook}
          />
          <MuiIconButton
            icon={'/images/apple'}
            altIcon='apple'
            background='transparent'
            iconHeight={32}
            iconWidth={32}
          />
        </Box>
      </Box>
    </Box>
  );
};
