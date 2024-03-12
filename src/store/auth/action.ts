import {
  FORGOT_PASSWORD,
  LOGIN_FACEBOOK,
  LOGIN_GOOGLE,
  LOGIN_USER,
  LOGOUT_USER_ASYNC,
  REGISTER_USER,
  RESET_FORGOT_PASSWORD,
  RESET_PASSWORD,
  VALIDATE_RESET_CODE,
} from './action-types';
import { actionObject } from '../../utils';

export const registerUser = (data: any) => actionObject(REGISTER_USER, data);
export const logout = () => actionObject(LOGOUT_USER_ASYNC);
export const loginUser = (data: any) => actionObject(LOGIN_USER, data);
export const forgotPassword = (data: any) => actionObject(FORGOT_PASSWORD, data);
export const resetForgotPassword = () => actionObject(RESET_FORGOT_PASSWORD);
export const validateResetCode = (data: any) => actionObject(VALIDATE_RESET_CODE, data);
export const resetPassword = (data: any) => actionObject(RESET_PASSWORD, data);
export const loginGoogle = (data: any) => actionObject(LOGIN_GOOGLE, data);
export const loginFacebook = (data: any) => actionObject(LOGIN_FACEBOOK, data);
