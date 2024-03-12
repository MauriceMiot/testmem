import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_ASYNC,
  LOGIN_FACEBOOK,
  LOGIN_FACEBOOK_ASYNC,
  LOGIN_GOOGLE,
  LOGIN_GOOGLE_ASYNC,
  LOGIN_USER,
  LOGIN_USER_ASYNC,
  REGISTER_USER,
  REGISTER_USER_ASYNC,
  RESET_PASSWORD,
  RESET_PASSWORD_ASYNC,
  VALIDATE_RESET_CODE,
  VALIDATE_RESET_CODE_ASYNC,
} from './action-types';
import { FetchService, actionObject, showDialog } from '@/utils';

function* loginUserAsync({ payload }: any): any {
  try {
    const response = yield call(FetchService, 'auth/login/client', 'POST', payload);

    yield put(actionObject(LOGIN_USER_ASYNC, response?.result));
    yield call(showDialog, 'login_success', 'success');
  } catch (error: any) {
    let message = error?.message;
    if (error?.message?.includes('error')) message = JSON.parse(message)?.error;
    yield call(showDialog, message, 'error');
  }
}

function* registerUserAsync({ payload }: any): any {
  try {
    const response = yield call(FetchService, 'auth/register', 'POST', payload);
    yield put(actionObject(REGISTER_USER_ASYNC, response?.result));
    yield call(showDialog, 'register_success', 'success');
  } catch (error: any) {
    let message = error?.message;
    if (error?.message?.includes('error')) message = JSON.parse(message)?.error;

    yield call(showDialog, message, 'error');
  }
}

function* forgotPasswordAsync({ payload }: any): any {
  try {
    const response = yield call(FetchService, 'auth/forgot-password', 'POST', payload);
    yield put(actionObject(FORGOT_PASSWORD_ASYNC, { ...response?.result, email: payload?.email }));
    yield call(showDialog, 'forgot_password_success', 'success');
  } catch (error: any) {
    let message = error?.message;
    if (error?.message?.includes('error')) message = JSON.parse(message)?.error;
    yield call(showDialog, message, 'error');
  }
}

function* validateResetCodeAsync({ payload }: any): any {
  try {
    const response = yield call(FetchService, 'auth/validate-reset-code', 'POST', payload);
    yield put(
      actionObject(VALIDATE_RESET_CODE_ASYNC, { ...response?.result, email: payload?.email, code: payload?.code }),
    );
    yield call(showDialog, 'validate_code_success', 'success');
  } catch (error: any) {
    let message = error?.message;
    if (error?.message?.includes('error')) message = JSON.parse(message)?.error;
    yield call(showDialog, message, 'error');
  }
}

function* resetPasswordAsync({ payload }: any): any {
  try {
    const response = yield call(FetchService, 'auth/reset-password', 'POST', payload);
    yield put(actionObject(RESET_PASSWORD_ASYNC, response?.result));
    yield call(showDialog, 'password_reset_success', 'success');
  } catch (error: any) {
    let message = error?.message;
    if (error?.message?.includes('error')) message = JSON.parse(message)?.error;
    yield call(showDialog, message, 'error');
  }
}

function* loginGoogleAsync({ payload }: any): any {
  try {
    const response = yield call(FetchService, 'auth/googleauth', 'POST', payload);

    yield put(actionObject(LOGIN_GOOGLE_ASYNC, response?.result));
    yield call(showDialog, 'login_success', 'success');
  } catch (error: any) {
    let message = error?.message;
    if (error?.message?.includes('error')) message = JSON.parse(message)?.error;
    yield call(showDialog, message, 'error');
  }
}

function* loginFacebookAsync({ payload }: any): any {
  try {
    const response = yield call(FetchService, 'auth/facebookauth', 'POST', payload);

    yield put(actionObject(LOGIN_FACEBOOK_ASYNC, response?.result));
    yield call(showDialog, 'login_success', 'success');
  } catch (error: any) {
    let message = error?.message;
    if (error?.message?.includes('error')) message = JSON.parse(message)?.error;
    yield call(showDialog, message, 'error');
  }
}

export function* watchRegisterUser() {
  yield takeLatest(REGISTER_USER, registerUserAsync);
}

export function* watchLoginUser() {
  yield takeLatest(LOGIN_USER, loginUserAsync);
}

export function* watchForgotPassword() {
  yield takeLatest(FORGOT_PASSWORD, forgotPasswordAsync);
}

export function* watchValidateResetCode() {
  yield takeLatest(VALIDATE_RESET_CODE, validateResetCodeAsync);
}

export function* watchResetPassword() {
  yield takeLatest(RESET_PASSWORD, resetPasswordAsync);
}

export function* watchLoginGoogle() {
  yield takeLatest(LOGIN_GOOGLE, loginGoogleAsync);
}

export function* watchFacebookGoogle() {
  yield takeLatest(LOGIN_FACEBOOK, loginFacebookAsync);
}
