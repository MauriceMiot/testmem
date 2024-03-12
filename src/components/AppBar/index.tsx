import { AppBar, Avatar, Box, ClickAwayListener, Typography, useMediaQuery, Theme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { expandDrawer, logout } from '@/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { palette } from '@/theme/constants';
import { MuiIconButton } from '../IconButton';
import { MuiDropdown } from '../Dropdown';
import { useRouter } from 'next/router';
import { authSelector } from '@/store/selectors';

export const MuiAppBar = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const [isOpen, setIsOpen] = useState(false);
  const [firstRender, setFirstRender] = useState(false);
  const router = useRouter();
  const authData = useSelector(authSelector);

  const settingsOptions: any = [
    {
      label: 'settings',
      action: () => router.push('/settings'),
    },
    {
      label: 'logout',
      action: () => {
        dispatch(logout());
        logoutWithFacebook();
      },
    },
  ];

  const handleDrawerChange = () => {
    dispatch(expandDrawer());
  };

  const setShowDropdown = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen((isOpen) => !isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!firstRender) setFirstRender(true);
    if (!authData?.isAuth && firstRender) router.push('/app/login');
  }, [authData?.isAuth, firstRender]);

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
    <AppBar position='fixed' elevation={0} sx={{ background: palette.background }}>
      <Box display='flex' padding={'0 1rem'} justifyContent={'space-between'} alignItems='center'>
        <Box
          borderRadius={'2.5rem'}
          display='flex'
          margin={'1.5rem 0'}
          sx={{ cursor: 'pointer' }}
          justifyContent={'space-between'}
          alignItems='center'
          gap={'0.625rem'}
          padding={'0.375rem 1rem'}
          bgcolor={palette.primary}
          onClick={() => handleDrawerChange()}>
          <Image src={`/images/mini-logo.svg`} alt={'logo'} width={24} height={24} quality={100} />

          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Avatar sx={{ width: 24, height: 24 }} />
            {!isMobile && (
              <Typography variant={'h5'} marginLeft={'0.5rem'}>
                Luke Wieland
              </Typography>
            )}
          </Box>

          <Image src={`/icons/expand.svg`} alt={'logo'} width={20} height={20} quality={100} />
        </Box>
        <Box display={'flex'} width={'7rem'} justifyContent={'space-between'} alignItems={'center'}>
          <MuiIconButton
            icon='/icons/notification'
            altIcon='notification'
            background={palette?.primary}
            method={() => console.log('press')}
          />
          <MuiIconButton
            icon='/icons/people'
            altIcon='people'
            background={palette?.primary}
            method={() => console.log('press')}
          />
          <Box>
            <MuiIconButton
              icon='/icons/settings'
              altIcon='settings'
              background={palette?.primary}
              method={(event: any) => setShowDropdown(event)}
            />

            <ClickAwayListener onClickAway={handleClose} disableReactTree={true}>
              <Box position={'relative'}>
                <MuiDropdown isOpen={isOpen} handleClose={handleClose} listItem={settingsOptions} />
              </Box>
            </ClickAwayListener>
          </Box>
        </Box>
      </Box>
    </AppBar>
  );
};

export default MuiAppBar;
