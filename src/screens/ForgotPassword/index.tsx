import React from 'react';
import { palette } from '@/theme/constants';
import Image from 'next/image';
import { useMediaQuery, Theme, Box } from '@mui/material';
import { Forgot, ChangePassword } from './components';
import { useSelector } from 'react-redux';
import { forgotSelector } from '@/store/selectors';

export const ForgotPassword = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const { step } = useSelector(forgotSelector);

  const showScreen = () => {
    switch (step) {
      case 1:
        return <Forgot />;

      case 2:
        return <ChangePassword />;

      default:
        return <Forgot />;
    }
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
        height={'30.75rem'}
        borderRadius={'0.5rem'}
        bgcolor={palette.primary}
        padding={isMobile ? '1rem' : '2rem'}
        boxShadow={
          '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)'
        }>
        <Box width={'4.875rem'} height={'5.25rem'} marginBottom={'1rem'} position={'relative'}>
          <Image src={`/images/logo.svg`} alt={'background-image'} fill quality={100} />
        </Box>
        <Box width={'100%'}>{showScreen()}</Box>
      </Box>
    </Box>
  );
};
