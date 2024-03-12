import {
  FORGOT_PASSWORD_ASYNC,
  LOGIN_FACEBOOK_ASYNC,
  LOGIN_GOOGLE_ASYNC,
  LOGIN_USER_ASYNC,
  LOGOUT_USER_ASYNC,
  REGISTER_USER_ASYNC,
  RESET_FORGOT_PASSWORD,
  RESET_PASSWORD_ASYNC,
  VALIDATE_RESET_CODE_ASYNC,
} from './action-types';

const initialState = {
  user: {},
  isAuth: false,
  recover: null,
  email: null,
  code: null,
};

const auth = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case REGISTER_USER_ASYNC:
      return {
        ...state,
        user: payload,
        isAuth: true,
      };
    case LOGIN_USER_ASYNC:
      return {
        ...state,
        user: payload,
        isAuth: true,
      };
    case LOGOUT_USER_ASYNC:
      return {
        ...state,
        user: {},
        isAuth: false,
      };

    case FORGOT_PASSWORD_ASYNC:
      return {
        ...state,
        recover: payload,
        email: payload?.email,
      };

    case RESET_FORGOT_PASSWORD:
      return {
        ...state,
        recover: null,
      };

    case VALIDATE_RESET_CODE_ASYNC:
      return {
        ...state,
        recover: payload,
        email: payload?.email,
        code: payload?.code,
      };

    case RESET_PASSWORD_ASYNC:
      return {
        ...state,
        user: payload,
        isAuth: true,
      };

    case LOGIN_GOOGLE_ASYNC:
      return {
        ...state,
        user: payload,
        isAuth: true,
      };
    case LOGIN_FACEBOOK_ASYNC:
      return {
        ...state,
        user: payload,
        isAuth: true,
      };
    default:
      return state;
  }
};

export default auth;
