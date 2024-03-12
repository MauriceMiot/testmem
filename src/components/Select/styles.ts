import { palette } from '@/theme/constants';

export const styles = (isDarkTheme: boolean) => ({
  width: '100%',

  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: isDarkTheme ? palette.white : palette.inputLight,
  },
  '& .MuiOutlinedInput-input': {
    color: isDarkTheme ? palette.white : palette.black,
  },
  '&:not(.Mui-error):not(.Mui-focused):hover': {
    '& > fieldset': {
      borderColor: isDarkTheme ? palette.white : palette.inputLight,
      borderWidth: 2,
    },
  },
});
