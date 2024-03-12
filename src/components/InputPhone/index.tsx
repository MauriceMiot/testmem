import React from 'react';
import { Box, Typography } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { palette } from '@/theme/constants';
import { styles } from './styles';

interface ICustomPhoneProps {
  value: string;
  error?: boolean;
  onChange?: any;
  errorMessage?: string;
  isDarkTheme?: boolean;
}

export const InputPhone: React.FC<ICustomPhoneProps> = ({
  value,
  error,
  onChange,
  isDarkTheme = true,
  errorMessage,
}) => {
  return (
    <Box position={'relative'}>
      <PhoneInput
        value={value}
        country={'us'}
        autoFormat={false}
        enableSearch
        inputStyle={isDarkTheme ? styles(error).inputDark : styles(error).inputLight}
        buttonStyle={isDarkTheme ? styles(error).buttonDark : styles(error).buttonLight}
        dropdownStyle={styles(isDarkTheme).dropdown}
        showDropdown={false}
        onChange={onChange}
      />

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
    </Box>
  );
};
