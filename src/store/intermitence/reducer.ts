import { SHOW_TOAST, EXPAND_DRAWER_TRIGGER, COLLAPSE_DRAWER_TRIGGER, SHOW_LOADING } from './action-types';

const initialState = {
  toast: {
    text: '',
    type: 'success',
    show: false,
    textLink: '',
    route: '',
  },
  drawerOpen: false,
  loading: false,
};

const intermitence = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case SHOW_TOAST:
      return {
        ...state,
        toast: {
          ...state.toast,
          ...payload,
        },
      };
    case EXPAND_DRAWER_TRIGGER:
      return { ...state, drawerOpen: true };
    case COLLAPSE_DRAWER_TRIGGER:
      return { ...state, drawerOpen: false };
    case SHOW_LOADING:
      return { ...state, loading: payload };

    default:
      return state;
  }
};

export default intermitence;
