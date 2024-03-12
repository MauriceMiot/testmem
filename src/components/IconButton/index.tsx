import { Box, IconButton, Typography } from '@mui/material';
import React, { FC } from 'react';
import Image from 'next/image';
import { palette } from '@/theme/constants';

interface IAditionalProps {
  icon: string;
  background: string;
  width?: string | number;
  height?: string | number;
  iconWidth?: number;
  iconHeight?: number;
  padding?: string | number;
  altIcon: string;
  label?: string;
  labelColor?: string;
  method?: (event: any) => void;
}

export const MuiIconButton: FC<IAditionalProps> = ({
  icon,
  background,
  width = 32,
  height = 32,
  padding = 1,
  altIcon,
  iconWidth = 16,
  iconHeight = 16,
  label,
  labelColor = palette.white,
  method,
}: any) => {
  const iconStyle = {
    width: width,
    height: height,
    background: background,
    padding: padding,
  };

  return (
    <Box display={'flex'} flexDirection={'column'} data-cy={'iconButton'}>
      <IconButton sx={iconStyle} onClick={method}>
        <Image src={`${icon}.svg`} alt={altIcon} width={iconWidth} height={iconHeight} quality={100} />
      </IconButton>
      <Typography variant='body2' color={labelColor}>
        {label}
      </Typography>
    </Box>
  );
};
