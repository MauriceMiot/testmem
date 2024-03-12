import { palette } from '@/theme/constants';

export const styles = (drawerOpen: boolean) => ({
  drawer: {
    width: drawerOpen ? '100%' : 0,
    transition: 'width 0.5s',
    position: 'absolute',
    left: 0,
  },

  icon: {
    transition: 'left 0.5s, top 0.5s',
    cursor: 'pointer',
  },
});
