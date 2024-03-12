import Box from '@mui/material/Box';
import { MuiAppBar, Drawer } from '@/components';

export function Layout({ children }: any) {
  return (
    <>
      <MuiAppBar />
      <Box display={'flex'} id='component-main' position={'relative'}>
        <Drawer />
        <Box
          component='main'
          height={'calc(100vh - 6rem)'}
          width={'100%'}
          marginTop={'6rem'}
          padding={'0 1rem'}
          minHeight={'calc(100vh - 6rem)'}>
          {children}
        </Box>
      </Box>
    </>
  );
}
