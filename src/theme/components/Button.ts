import { palette } from '../constants';
import { theme } from '@/theme';

export const MuiButton = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ ownerState }: any) => ({
      fontSize: theme?.typography?.h2,
      borderRadius: '0.25rem',

      ...(ownerState.variant === 'contained' && {
        color: palette.error,
        background: palette.secondary,
      }),

      ...(ownerState.variant === 'outlined' && {
        color: palette.error,
        border: `2px solid ${palette.secondary}`,
      }),

      '&:hover': {
        boxShadow: 'none',
        ...(ownerState.variant === 'contained' && {
          background: palette.secondary,
        }),
        ...(ownerState.variant === 'outlined' && {
          color: palette.primary,
          border: `2px solid ${palette.secondary}`,
          backgroundColor: 'transparent',
        }),
        ...(ownerState.variant === 'text' && {
          color: palette.secondary,
          backgroundColor: 'transparent',
        }),
      },

      '&:disabled': {
        ...(ownerState.variant === 'contained' && {
          background: palette.gray,
          color: palette.gray,
        }),
        ...(ownerState.variant === 'outlined' && {
          borderColor: palette.gray,
          color: palette.gray,
        }),
        ...(ownerState.variant === 'text' && {
          backgroundColor: 'transparent',
          color: palette.gray,
        }),
      },
    }),
  },
};
