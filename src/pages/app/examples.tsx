import type { NextPage, GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { Box, Button, Checkbox, Grid, Typography } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MuiIconButton, MuiSelect, MuiTextField, MuiInputDate, InputPhone } from '@/components';
import { palette } from '@/theme/constants';
import { useRef, useState } from 'react';

const ExamplePage: NextPage = () => {
  const { t } = useTranslation();
  const [name, setName]: any = useState('');
  const [select, setSelect]: any = useState('');
  const inputRef = useRef(null);

  const changeInputStatus = (value: string, error: any) => {
    if (value !== '') {
      if (error) return 'error';
      return 'inherit';
    }
    return 'inherit';
  };

  const handleInput = (value: any) => {
    setName(value.target.value);
  };
  const handleSelect = (value: any) => {
    setSelect(value.target.value);
  };
  return (
    <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        padding={'0 1rem 1.5rem 1rem'}
        bgcolor={palette.white}
        width={'50%'}>
        <Typography variant='h3' textAlign={'center'} color={palette.black}>
          {t('Light Theme')}
        </Typography>

        <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'flex-start'}>
          <Typography variant='h1' color={palette.black}>
            {t('H1')}
          </Typography>

          <Typography variant='h2' color={palette.black}>
            {t('H2')}
          </Typography>

          <Typography variant='h3' color={palette.black}>
            {t('H3')}
          </Typography>
          <Typography variant='h4' color={palette.black}>
            {t('H4')}
          </Typography>
          <Typography variant='h5' color={palette.black}>
            {t('H5')}
          </Typography>
          <Typography variant='h6' color={palette.black}>
            {t('H6')}
          </Typography>
          <Typography variant='body1' color={palette.black}>
            {t('body1')}
          </Typography>
          <Typography variant='body2' color={palette.black}>
            {t('body2')}
          </Typography>
          <Typography variant='subtitle1' color={palette.black}>
            {t('subtitle1')}
          </Typography>
          <Typography variant='subtitle2' color={palette.black}>
            {t('subtitle2')}
          </Typography>
          <Typography variant='button' color={palette.black}>
            {t('button')}
          </Typography>
        </Box>
        <Box>
          <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
            <Button
              sx={{ padding: '0.5rem 1rem', margin: '0 0.50rem' }}
              variant={'contained'}
              onClick={() => console.log('hi')}>
              <Typography>{t('next')}</Typography>
            </Button>

            <Button variant={'outlined'} onClick={() => console.log('hi')}>
              <Typography color={palette?.secondary}>{t('prev')}</Typography>
            </Button>
            <Box margin={'1rem'} display={'flex'}>
              <MuiIconButton
                icon='/icons/notification'
                altIcon='notification'
                background={palette?.secondary}
                labelColor={palette?.black}
                label='pepe'
                method={() => console.log('press')}
              />
              <Box margin={'0 1rem'}>
                <MuiIconButton
                  icon='/icons/filter'
                  altIcon='filter'
                  width={40}
                  height={40}
                  background={palette?.gray}
                  iconHeight={30}
                  iconWidth={30}
                  method={() => console.log('press')}
                />
              </Box>
              <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                <Checkbox
                  color={'error'}
                  sx={{
                    color: palette.secondary,
                    '&.Mui-checked': {
                      color: palette.secondary,
                    },
                  }}
                />
                <Typography color={palette?.primary}>light</Typography>
                <Checkbox
                  checked
                  color={'error'}
                  sx={{
                    color: palette.secondary,
                    '&.Mui-checked': {
                      color: palette.secondary,
                    },
                  }}
                />
                <Typography color={palette?.primary}>light checked</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <MuiTextField
              id='name'
              fullWidth
              name='name'
              onChange={handleInput}
              autoComplete='name'
              placeholder={t('name')}
              label={'label'}
              isDarkTheme={false}
              value={name}
              status={changeInputStatus('name', false)}
            />
          </Grid>
          <Grid item xs={6}>
            <MuiSelect
              name='select'
              value={select}
              label='label'
              placeholder='placeholder'
              isDarkTheme={false}
              handleSelect={handleSelect}
              options={[{ name: 'testing1' }, { name: 'testing2' }]}></MuiSelect>
          </Grid>

          <Grid item xs={6}>
            <MuiInputDate
              ref={inputRef.current}
              value={''}
              label={'Date'}
              isDarkTheme={false}
              handleDatePicker={(date: any) => {
                console.log('dischargeDate', date);
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <InputPhone value='' isDarkTheme={false} onChange={null} />
          </Grid>
        </Grid>
        <Grid container marginTop={'1rem'} spacing={2}>
          <Grid item xs={6}>
            <MuiTextField
              id='name'
              fullWidth
              name='name'
              onChange={handleInput}
              autoComplete='name'
              placeholder={t('name')}
              label={'label'}
              isDarkTheme={false}
              value={name}
              status={changeInputStatus('name', true)}
              errorMessage={'error'}
            />
          </Grid>
          <Grid item xs={6}>
            <MuiSelect
              name='select'
              value={select}
              label='label'
              error={true}
              errorMessage='error'
              placeholder='placeholder'
              isDarkTheme={false}
              handleSelect={handleSelect}
              options={[{ name: 'testing1' }, { name: 'testing2' }]}></MuiSelect>
          </Grid>

          <Grid item xs={6}>
            <MuiInputDate
              ref={inputRef.current}
              value={''}
              label={'Date'}
              error
              errorMessage='error'
              isDarkTheme={false}
              handleDatePicker={(date: any) => {
                console.log('dischargeDate', date);
              }}
            />
          </Grid>

          <Grid item xs={6}>
            <InputPhone value='' error errorMessage='error' isDarkTheme={false} onChange={null} />
          </Grid>
        </Grid>
      </Box>

      <Box display={'flex'} flexDirection={'column'} padding={'0 1rem 1.5rem 1rem'} width={'50%'}>
        <Typography variant='h3' textAlign={'center'} color={palette.white}>
          {t('Dark Theme')}
        </Typography>
        <Box
          display={'flex'}
          flexDirection={'column'}
          width={'100%'}
          justifyContent={'flex-start'}
          alignItems={'flex-start'}>
          <Box width={'50%'}></Box>
          <Typography variant='h1' color={palette.white}>
            {t('H1')}
          </Typography>

          <Typography variant='h2' color={palette.white}>
            {t('H2')}
          </Typography>

          <Typography variant='h3' color={palette.white}>
            {t('H3')}
          </Typography>
          <Typography variant='h4' color={palette.white}>
            {t('H4')}
          </Typography>
          <Typography variant='h5' color={palette.white}>
            {t('H5')}
          </Typography>
          <Typography variant='h6' color={palette.white}>
            {t('H6')}
          </Typography>
          <Typography variant='body1' color={palette.white}>
            {t('body1')}
          </Typography>
          <Typography variant='body2' color={palette.white}>
            {t('body2')}
          </Typography>
          <Typography variant='subtitle1' color={palette.white}>
            {t('subtitle1')}
          </Typography>
          <Typography variant='subtitle2' color={palette.white}>
            {t('subtitle2')}
          </Typography>
          <Typography variant='button' color={palette.white}>
            {t('button')}
          </Typography>
        </Box>
        <Box display={'flex'}>
          <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
            <Button
              sx={{ padding: '0.5rem 1rem', margin: '0 0.50rem' }}
              variant={'contained'}
              onClick={() => console.log('hi')}>
              <Typography>{t('next')}</Typography>
            </Button>

            <Button variant={'outlined'} onClick={() => console.log('hi')}>
              <Typography color={palette?.secondary}>{t('prev')}</Typography>
            </Button>
          </Box>
          <Box margin={'1rem'} display={'flex'}>
            <MuiIconButton
              icon='/icons/notification'
              altIcon='notification'
              label='pepe'
              background={palette?.secondary}
              method={() => console.log('press')}
            />
            <Box margin={'0 1rem'}>
              <MuiIconButton
                icon='/icons/filter'
                altIcon='filter'
                width={40}
                height={40}
                background={palette?.gray}
                iconHeight={30}
                iconWidth={30}
                method={() => console.log('press')}
              />
            </Box>

            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
              <Checkbox
                color={'error'}
                sx={{
                  color: palette.white,
                  '&.Mui-checked': {
                    color: palette.secondary,
                  },
                }}
              />
              <Typography color={palette.white}>dark</Typography>
              <Checkbox
                checked
                color={'error'}
                sx={{
                  color: palette.white,
                  '&.Mui-checked': {
                    color: palette.secondary,
                  },
                }}
              />
              <Typography color={palette.white}>dark checked</Typography>
            </Box>
          </Box>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <MuiTextField
              id='name'
              name='name'
              fullWidth
              onChange={() => console.log('h')}
              value={name}
              autoComplete='name'
              placeholder={t('name')}
              label={'label'}
              isDarkTheme={true}
            />
          </Grid>
          <Grid item xs={6}>
            <MuiSelect
              name=''
              label='label'
              placeholder='placeholder'
              isDarkTheme={true}
              options={[{ name: 'testing1' }, { name: 'testing2' }]}></MuiSelect>
          </Grid>
          <Grid item xs={6}>
            <MuiInputDate
              ref={inputRef.current}
              value={''}
              label={'Date'}
              handleDatePicker={(date: any) => {
                console.log('dischargeDate', date);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <InputPhone value='' error={false} isDarkTheme={true} errorMessage='ee' onChange={null} />
          </Grid>
        </Grid>
        <Grid container marginTop={'1rem'} spacing={2}>
          <Grid item xs={6}>
            <MuiTextField
              id='name'
              name='name'
              fullWidth
              onChange={() => console.log('h')}
              value={name}
              errorMessage='error'
              autoComplete='name'
              placeholder={t('name')}
              status={changeInputStatus('name', true)}
              label={'label'}
              isDarkTheme={true}
            />
          </Grid>
          <Grid item xs={6}>
            <MuiSelect
              name=''
              label='label'
              placeholder='placeholder'
              error
              errorMessage='error'
              isDarkTheme={true}
              options={[{ name: 'testing1' }, { name: 'testing2' }]}></MuiSelect>
          </Grid>
          <Grid item xs={6}>
            <MuiInputDate
              ref={inputRef.current}
              value={''}
              label={'Date'}
              error
              errorMessage='error'
              handleDatePicker={(date: any) => {
                console.log('dischargeDate', date);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <InputPhone value='' error errorMessage='error' isDarkTheme={true} onChange={null} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps<any> = async () => ({
  props: {
    ...(await serverSideTranslations('en', ['common'])),
  },
});

export default ExamplePage;
