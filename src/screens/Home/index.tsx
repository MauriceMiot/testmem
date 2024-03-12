import { Box, Grid, Typography, useMediaQuery, Theme, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { palette } from '@/theme/constants';

const MotionGrid = motion(Grid);
const MotionBox = motion(Grid);

export const Home = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  const testData = [
    {
      id: 1,
      title: 'title 1',
      image: '/images/test-image.png',
    },
    {
      id: 2,
      title: 'title 2',
      image: '/images/test-image.png',
    },
  ];

  return (
    <Box display={'flex'} flexDirection={'column'} zIndex={1}>
      <Grid
        container
        padding={0}
        rowGap={0}
        marginBottom={isMobile ? 0 : '2rem'}
        marginTop={'0.5rem'}
        width={'100%'}
        columnGap={isMobile ? 0 : 2.5}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'flex-start'}>
        <Typography variant={isMobile ? 'h5' : 'h4'}>{}</Typography>

        <Grid item display={'flex'} width={'100%'}>
          {testData?.map((item: any) => {
            return (
              <Box display={'flex'} key={item.title} margin={'1rem'} flexDirection={'column'}>
                <MotionGrid
                  item
                  xs={1}
                  borderRadius={'0.5rem'}
                  border={`0.375rem solid ${palette.secondary}`}
                  minHeight={isMobile ? '10.313rem' : '13.313rem'}
                  minWidth={isMobile ? '13.813rem' : '23.625rem'}
                  maxHeight={isMobile ? '10.313rem' : '13.313rem'}
                  maxWidth={isMobile ? '13.813rem' : '23.625rem'}
                  position={'relative'}
                  whileHover={['grow']}
                  sx={{ cursor: 'pointer' }}
                  variants={{
                    grow: {
                      scale: 1.1,
                    },
                  }}>
                  <Image src={`/images/test-image.png`} alt='test-image' fill priority sizes='100%' quality={100} />
                </MotionGrid>
                <Typography marginTop={'0.5rem'} variant={isMobile ? 'h5' : 'h4'}>
                  {item?.title}
                </Typography>
              </Box>
            );
          })}
        </Grid>
      </Grid>
      <Box position={'relative'}>
        <Grid item xs={6}>
          <MotionBox
            item
            borderRadius={'50%'}
            id={'circle'}
            width={227}
            height={227}
            position={'absolute'}
            top={0}
            left={0}
            sx={{ cursor: 'pointer' }}
            bgcolor={palette.primary}
            animate={['initial']}
            whileHover={['grow']}
            variants={{
              grow: {
                scale: 1.1,
              },
              initial: {
                y: [-20, 20],
                rotate: 0,
                transition: {
                  delay: 0.2,
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                },
              },
            }}>
            <Image
              src={`/images/test-image.png`}
              style={{ borderRadius: '62.5rem 62.5rem 37.5rem 37.5rem' }}
              alt='example-memorie'
              width={227}
              height={184}
              quality={100}
            />

            <IconButton
              sx={{
                width: '3.625rem',
                height: '3.625rem',
                backgroundColor: palette.black,
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: '1.25rem',
                margin: '0 auto',
              }}
              disableRipple>
              <Image
                src={`/images/collection.svg`}
                style={{ borderRadius: '62.5rem 62.5rem 37.5rem 37.5rem' }}
                alt='example-memorie'
                width={24}
                height={24}
                quality={100}
              />
            </IconButton>
          </MotionBox>
        </Grid>
      </Box>
    </Box>
  );
};
