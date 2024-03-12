import { Button, CircularProgress } from '@mui/material';
import { styles } from './styles';
import { palette } from '@/theme/constants';

interface iButtonProps {
  method?: () => void;

  height?: string;
  disabled: any;
  padding?: string;
  loading?: boolean;
  children: any;
  variant: any;
  borderRadius?: string;
  backgroundColor?: string;
  loaderColor?: string;
  type: any;
}

export const MuiButton = ({
  height = '2.625rem',
  disabled,
  padding,
  loading,
  children,
  variant = 'contained',
  borderRadius,
  method,
  backgroundColor = palette.secondary,
  loaderColor = palette.white,
  type = 'submit',
}: iButtonProps) => {
  const buttonStyles = {
    height,
    padding,
    borderRadius,
    backgroundColor,
  };
  return (
    <Button sx={styles(buttonStyles)} fullWidth onClick={method} disabled={disabled} type={type} variant={variant}>
      {!loading ? <>{children}</> : <CircularProgress size={32} sx={{ color: loaderColor }} />}
    </Button>
  );
};
