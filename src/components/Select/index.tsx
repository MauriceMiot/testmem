import { Select, SelectProps, MenuItem, Box, Typography, FormControl, InputLabel } from '@mui/material';
import { FC, useState } from 'react';
import { palette } from '@/theme/constants';
import Image from 'next/image';
import { styles } from './styles';

interface IAditionalProps {
  name: string;
  placeholder?: string;
  options?: any;
  handleSelect: any;
  value: string;
  error?: boolean;
  errorMessage?: string;
  isDarkTheme?: boolean;
  label?: string;
}

type Props = SelectProps | IAditionalProps;

export const MuiSelect: FC<Props> = ({
  name,
  options,
  handleSelect,
  value,
  error = false,
  errorMessage = '',
  isDarkTheme = true,
  label,
  placeholder,
}: any) => {
  const [isSelectOpen, setSelectOpen] = useState(false);
  return (
    <FormControl fullWidth error={error ? true : false}>
      <InputLabel
        id={`${name}-label`}
        shrink
        sx={{
          color: isDarkTheme ? palette.white : palette.inputLabelLight,
          '&.Mui-focused': {
            color: palette.focus,
          },
          '&.Mui-error.Mui-focused': {
            color: palette.error,
          },
        }}>
        {label}
      </InputLabel>
      <Select
        data-cy='select-component'
        id={name}
        name={name}
        value={value}
        defaultValue={''}
        sx={styles(isDarkTheme)}
        onChange={handleSelect}
        label={label}
        placeholder='Label'
        displayEmpty={true}
        MenuProps={{ style: { width: '50%', borderRadius: '50rem' } }}
        IconComponent={() => (
          <Box marginRight={1} marginTop={1} sx={{ cursor: 'pointer' }}>
            <Image
              src={`/icons/${isDarkTheme ? 'down-arrow-dark' : 'down-arrow-light'}.svg`}
              alt={'alt'}
              width={10}
              height={20}
            />
          </Box>
        )}
        inputProps={{
          MenuProps: {
            style: { zIndex: 1400 },
          },
        }}
        open={isSelectOpen}
        onOpen={() => setSelectOpen(true)}
        onClose={() => setSelectOpen(false)}>
        {!isSelectOpen && (
          <MenuItem value='' disabled>
            <Typography color={isDarkTheme ? palette.white : palette.black}>{placeholder}</Typography>
          </MenuItem>
        )}
        {options?.map((item: any) => {
          return (
            <MenuItem value={item.id} key={item.id}>
              {item.name}
            </MenuItem>
          );
        })}
      </Select>
      {error && (
        <Typography
          position={'absolute'}
          bottom={-21}
          left={15}
          fontSize={'0.75rem'}
          fontWeight={400}
          color={palette.error}>
          {errorMessage}
        </Typography>
      )}
    </FormControl>
  );
};
