import { Avatar, Box, Drawer as MuiDrawer, Typography } from '@mui/material';
import { intermitenceSelector } from '@/store/selectors';
import { collapseDrawer } from '@/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { palette } from '@/theme/constants';
import { styles } from './styles';
import Image from 'next/image';
import { MuiIconButton } from '../IconButton';
import { useMediaQuery, Theme } from '@mui/material';
import { useTranslation } from 'next-i18next';

export const Drawer = () => {
  const intermitenceData = useSelector(intermitenceSelector);
  const { drawerOpen } = intermitenceData;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const handleDrawerChange = () => {
    dispatch(collapseDrawer());
  };

  const mockData = [
    {
      userName: 'Sarah Taylor',
      email: '@Sarah98_32',
    },
    {
      userName: 'Gary Bohlender',
      email: '@garyTaylor6653',
    },
    {
      userName: 'Gary Taylor',
      email: '@garyTaylor665',
    },
  ];

  const showOptions = () => {
    console.log('press');
  };

  return (
    <MuiDrawer
      variant='permanent'
      elevation={16}
      anchor='left'
      sx={styles(drawerOpen).drawer}
      PaperProps={{
        style: {
          width: drawerOpen ? '100%' : 0,
          transition: 'width 0.5s',
          overflowX: 'hidden',
          background:
            'linear-gradient(89.94deg, rgba(0, 0, 0, 0.6) 18.46%, rgba(0, 0, 0, 0) 99.94%), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
        },
      }}>
      <Box
        position='absolute'
        top={10}
        left={isMobile ? '85%' : '18.25rem'}
        width={30}
        height={30}
        sx={styles(drawerOpen).icon}
        zIndex={1101}
        onClick={() => handleDrawerChange()}
        display='flex'
        justifyContent={'center'}
        data-cy={'drawerButton'}
        alignItems={'center'}>
        <MuiIconButton
          icon='/icons/close-white'
          altIcon='filter'
          background={palette?.primary}
          iconHeight={isMobile ? 24 : 16}
          iconWidth={isMobile ? 24 : 16}
        />
      </Box>
      <Box
        height={'100vh'}
        width={'100%'}
        boxShadow={
          '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)'
        }>
        <Box
          height={'100vh'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'flex-start'}
          alignItems={'center'}
          padding={'1.5rem  1rem'}
          width={isMobile ? '100%' : '20.75rem'}
          borderRadius={isMobile ? 0 : '0 1rem 1rem 0 '}
          bgcolor={palette.primary}>
          <Box>
            <Image
              src={`/images/logo.svg`}
              alt={'background-image'}
              width={isMobile ? 69 : 89}
              height={isMobile ? 64 : 84}
              quality={100}
            />
          </Box>

          <Typography variant='body1' marginBottom={'1.5rem'}>
            {' '}
            {t('interactive_profile')}
          </Typography>

          <Box
            borderRadius={'50%'}
            width={isMobile ? 90 : 180}
            height={isMobile ? 90 : 180}
            minHeight={isMobile ? 90 : 180}
            minWidth={isMobile ? 90 : 180}
            position={'relative'}
            border={`0.375rem solid ${palette.secondary}`}>
            <Image src={`/images/logo.svg`} alt='profile image' fill style={{ borderRadius: '50%' }} quality={100} />
          </Box>

          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} flexDirection={'column'}>
            <Typography variant={isMobile ? 'body1' : 'h4'} margin={'1rem 0 0.25rem 0'}>
              {'Luke Wieland'}
            </Typography>

            <Typography variant={isMobile ? 'body2' : 'body1'} marginBottom={'0.25rem'}>
              {'@lukewieland'}
            </Typography>
            <Typography variant='subtitle2'>{'Colorado Springs, CO'}</Typography>
          </Box>

          <Box
            marginTop={'1rem'}
            display={'flex'}
            padding={'1rem'}
            width={'100%'}
            justifyContent={'space-between'}
            bgcolor={palette.background}
            borderRadius={'1.25rem'}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <Typography variant='h5'>50</Typography>
              <Typography variant='h6'>{t('stories')}</Typography>
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <Typography variant='h5'>100</Typography>
              <Typography variant='h6'>{t('collaborators')}</Typography>
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
              <Typography variant='h5'>54</Typography>
              <Typography variant='h6'>{t('collaborations')}</Typography>
            </Box>
          </Box>
          <Box
            marginTop={'1rem'}
            display={'flex'}
            padding={'1rem 0.2rem'}
            marginBottom={'1.5rem'}
            width={'100%'}
            justifyContent={'space-between'}
            bgcolor={palette.background}
            borderRadius={'1.25rem'}>
            <Typography variant='body2'>USAFA class of 2024</Typography>
          </Box>
          <Box
            width={'100%'}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}>
            <Typography textAlign={'left'} variant='h4' marginBottom={isMobile ? '1rem' : 0}>
              {t('collaborators')}
            </Typography>
            <Box
              width={'100%'}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'flex-start'}
              flex='1'
              sx={{ overflowY: 'auto' }}
              alignItems={'flex-start'}>
              <Box
                display={'flex'}
                width={'100%'}
                height={isMobile ? '25vh' : '20vh'}
                minHeight={'20vh'}
                flexDirection={'column'}>
                {mockData?.map((item: any, index: number) => {
                  return (
                    <Box
                      marginTop={'1rem'}
                      key={`${item?.email} + ${index}`}
                      display={'flex'}
                      padding={'1rem'}
                      width={'100%'}
                      justifyContent={'space-between'}
                      alignItems={'center'}
                      bgcolor={palette.background}
                      borderRadius={'1.25rem'}>
                      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Avatar sx={{ width: isMobile ? 30 : 40, height: isMobile ? 30 : 40 }} />
                        <Box marginLeft={'0.5rem'}>
                          <Typography variant='h6'>{item?.userName}</Typography>
                          {!isMobile && <Typography variant='caption'>{item?.email}</Typography>}
                        </Box>
                      </Box>

                      <MuiIconButton
                        icon='/icons/more'
                        altIcon='more'
                        iconWidth={24}
                        iconHeight={24}
                        background={palette?.background}
                        method={() => showOptions()}
                      />
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </MuiDrawer>
  );
};
