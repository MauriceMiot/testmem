import { all, fork } from 'redux-saga/effects';
import { watchExpandDrawerSaga, watchCollapseDrawerSaga } from '@/store/intermitence/saga';
import { watchSetNextStep } from './forgot-password/saga';
import {
  watchFacebookGoogle,
  watchForgotPassword,
  watchLoginGoogle,
  watchLoginUser,
  watchRegisterUser,
  watchResetPassword,
  watchValidateResetCode,
} from './auth/saga';

export default function* allSagas() {
  yield all([
    fork(watchExpandDrawerSaga),
    fork(watchCollapseDrawerSaga),
    fork(watchSetNextStep),
    fork(watchRegisterUser),
    fork(watchLoginUser),
    fork(watchForgotPassword),
    fork(watchValidateResetCode),
    fork(watchResetPassword),
    fork(watchLoginGoogle),
    fork(watchFacebookGoogle),
  ]);
}
