import { Box, Grid, Typography, Button, useMediaQuery, Theme, Link } from '@mui/material';
import React, { useEffect } from 'react';
import { MuiTextField, InputPhone, MuiButton } from '@/components';
import { palette } from '@/theme/constants';
import Image from 'next/image';
import { FormikConfig } from './formik';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { UseIntermitence } from '@/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '@/store/actions';
import { authSelector, intermitenceSelector } from '@/store/selectors';

export const Register = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const { status: showPassword, switchStatus: switchShowPassword } = UseIntermitence();
  const { status: showConfirmPassword, switchStatus: switchShowConfirmPassword } = UseIntermitence();
  const authData = useSelector(authSelector);

  const dispatch = useDispatch();
  const { loading } = useSelector(intermitenceSelector);

  useEffect(() => {
    if (authData?.isAuth) router.push('/app/home');
  }, [authData?.isAuth]);

  const handleSubmit = (data: any) => {
    const { confirm_password, ...formValues } = data;
    dispatch(registerUser(formValues));
  };

  const handleOnTouched = (key: string) => setTouched({ ...touched, [key]: true });

  const {
    values,
    handleSubmit: formikSubmit,
    handleChange,
    errors,
    touched,
    setTouched,
    dirty,
    isValid,
    setFieldValue,
  } = FormikConfig(handleSubmit);

  const changeInputStatus = (value: string, error: any) => {
    if (value !== '') {
      if (error) return 'error';
      return 'inherit';
    }
    return 'inherit';
  };

  const handlePhone = (value: string) => {
    setFieldValue('phonenumber', value);
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
        width={'59rem'}
        height={isMobile ? '95%' : '46.75rem'}
        borderRadius={'0.5rem'}
        bgcolor={palette.primary}
        padding={isMobile ? '1rem' : '2rem'}
        sx={{ overflowY: 'auto' }}
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
          {t('register')}
        </Typography>

        <Box alignSelf={'flex-start'}>
          <Typography marginBottom={'1rem'} variant='body2'>
            {t('user_information')}
          </Typography>
        </Box>

        <form onSubmit={formikSubmit}>
          <Grid container spacing={isMobile ? 0 : 2} width={'100%'} marginBottom={'0.5rem'} rowSpacing={2}>
            <Grid item xs={isMobile ? 12 : 6}>
              <MuiTextField
                id='name'
                name='name'
                fullWidth
                onBlur={() => {
                  handleOnTouched('name');
                }}
                status={changeInputStatus(values.name, errors.name && touched.name)}
                onChange={handleChange}
                value={values.name}
                autoComplete='name'
                placeholder={'name'}
                label={'name'}
                isDarkTheme
                errorMessage={errors.name}
              />
            </Grid>

            <Grid item xs={isMobile ? 12 : 6}>
              <MuiTextField
                id='lastname'
                name='lastname'
                fullWidth
                onBlur={() => {
                  handleOnTouched('lastname');
                }}
                status={changeInputStatus(values.lastname, errors.lastname && touched.lastname)}
                onChange={handleChange}
                value={values.lastname}
                autoComplete='lastname'
                placeholder={'lastname'}
                label={'lastname'}
                isDarkTheme
                errorMessage={errors.lastname}
              />
            </Grid>

            <Grid item xs={isMobile ? 12 : 6}>
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
                placeholder={'email'}
                label={'email'}
                isDarkTheme
                errorMessage={errors.email}
              />
            </Grid>
            <Grid item xs={isMobile ? 12 : 6}>
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
                placeholder={'password'}
                label={'password'}
                isDarkTheme
                iconMethod={switchShowPassword}
                iconHeight={18}
                iconWidth={18}
                type={!showPassword ? 'password' : 'text'}
                endIcon={showPassword ? '/icons/eye-white.svg' : '/icons/eye-out-white.svg'}
                errorMessage={errors.password}
                status={changeInputStatus(values.password, errors.password && touched.password)}
              />
            </Grid>
            <Grid item xs={isMobile ? 12 : 6}>
              <MuiTextField
                id='confirm_password'
                name='confirm_password'
                fullWidth
                onBlur={() => {
                  handleOnTouched('confirm_password');
                }}
                onChange={handleChange}
                value={values.confirm_password}
                autoComplete='confirm_password'
                placeholder={'confirm_password'}
                label={'confirm_password'}
                isDarkTheme
                iconMethod={switchShowConfirmPassword}
                iconHeight={18}
                iconWidth={18}
                type={!showConfirmPassword ? 'password' : 'text'}
                endIcon={showConfirmPassword ? '/icons/eye-white.svg' : '/icons/eye-out-white.svg'}
                errorMessage={errors.confirm_password}
                status={changeInputStatus(values.confirm_password, errors.confirm_password && touched.confirm_password)}
              />
            </Grid>
            <Grid item xs={isMobile ? 12 : 6}>
              <InputPhone
                value={values.phonenumber}
                error={!!errors.phonenumber && touched.phonenumber}
                errorMessage={errors.phonenumber}
                isDarkTheme
                onChange={(e: any) => {
                  handlePhone(e);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <MuiTextField
                id='description'
                name='description'
                fullWidth
                multiline
                onBlur={() => {
                  handleOnTouched('description');
                }}
                status={changeInputStatus(values.description, errors.description && touched.description)}
                onChange={handleChange}
                value={values.description}
                autoComplete='description'
                placeholder={'about_me'}
                label={'about_me'}
                isDarkTheme
                errorMessage={errors.description}
              />
            </Grid>

            <Grid item xs={12}>
              <MuiButton type='submit' disabled={!isValid || !dirty || loading} loading={loading} variant={'contained'}>
                <Typography variant='button'>{t('register')}</Typography>
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
              <Typography variant='caption'>{t('already_register')}</Typography>
              <Link href={'/app/login'}>
                <Typography variant='caption' marginLeft={isMobile ? 0 : '0.375rem'} color={palette.secondary}>
                  {t('click_to_login')}
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};
