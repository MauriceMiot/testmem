import { Box, MenuItem, MenuList, Typography } from '@mui/material';
import { palette } from '@/theme/constants';
import { useTranslation } from 'next-i18next';
import { styles } from './styles';
import { AnimatePresence, motion, Variants } from 'framer-motion';

const MotionContainer = motion(Box);
const MotionList = motion(MenuList);
const MotionItem = motion(MenuItem);

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

interface CustomPopperProps {
  isOpen: boolean;
  handleClose: () => void;
  width?: string;
  listItem: {
    label: string;
    action: () => void;
  }[];
}

export const MuiDropdown = ({ isOpen, handleClose, listItem, width = '10rem' }: CustomPopperProps) => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionContainer
          initial={!isOpen ? 'open' : 'closed'}
          exit={!isOpen ? 'open' : 'closed'}
          position={'absolute'}
          top={'1rem'}
          right={0}
          width={width}
          zIndex={-1}
          sx={styles.dropDown}
          id='dropdown'
          animate={isOpen ? 'open' : 'closed'}>
          <MotionList
            sx={{ backgroundColor: palette.primary, borderRadius: '0.25rem' }}
            variants={{
              open: {
                clipPath: 'inset(0% 0% 0% 0%  )',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: 'inset(10% 50% 90% 50%)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpen ? 'auto' : 'none' }}>
            {listItem?.map((item: any) => {
              return (
                <MotionItem
                  key={item.label}
                  sx={styles.item}
                  variants={itemVariants}
                  onClick={() => {
                    if (item.action) item.action();
                    handleClose();
                  }}
                  disableRipple>
                  <Box>
                    <Typography variant='body1'>{t(item.label)}</Typography>
                  </Box>
                </MotionItem>
              );
            })}
          </MotionList>
        </MotionContainer>
      )}
    </AnimatePresence>
  );
};
