import { palette } from '@/theme/constants';

export const styles = (isDarkTheme: boolean) => ({
  input: {
    '& .MuiFormHelperText-root.Mui-error': {
      // position: 'absolute',
      // top: '100%',
      marginBottom: 0,
    },
    '& .MuiOutlinedInput-input': {
      color: isDarkTheme ? palette.white : palette.black,
      '::placeholder': {
        color: isDarkTheme ? palette.white : palette.black,
        opacity: 1,
      },
    },

    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: 2,
      border: `1px solid ${isDarkTheme ? palette.white : palette.inputLight}`,
    },
    '& :not(.Mui-error):not(.Mui-focused):hover': {
      '& > fieldset': {
        borderColor: isDarkTheme ? palette.white : palette.inputLight,
        borderWidth: 2,
      },
    },

    '& .MuiInputLabel-root': {
      fontSize: '1rem',
      color: isDarkTheme ? palette.white : palette.inputLabelLight,
      top: '-7px',
      '&.Mui-error': {
        color: palette.error,
      },

      '&.Mui-focused': {
        color: palette.focus,
      },
      '&.Mui-error.Mui-focused': {
        color: palette.error,
      },

      '&.MuiInputLabel-shrink': {
        top: '0px',
      },
    },

    inputStyle: {
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        display: 'none',
      },
    },
  },
});
