import { Box, Typography } from '@mui/material';
import React from 'react';
import { MuiButton } from '@/components';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export const Landing = () => {
  const { t } = useTranslation();

  return (
    <Box
      display={'flex'}
      height={'100vh'}
      padding={'0 1rem'}
      width={'100%'}
      justifyContent={'center'}
      alignItems={'center'}>
      <Link href={'/app/login'}>
        <Box width={'10rem'}>
          <MuiButton type='submit' variant={'contained'} disabled={false}>
            <Typography variant='button'>{t('login')}</Typography>
          </MuiButton>
        </Box>
      </Link>
    </Box>
  );
};
