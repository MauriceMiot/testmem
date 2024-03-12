import { UnknownAction } from 'redux';
import { delay, put } from 'redux-saga/effects';

const statusManagement = (inputStatus: any = 'inherit') => {
  if (inputStatus == 'inherit') return false;
  if (inputStatus == 'error') return true;
};

export const actionObject = (
  type: string,
  payload?: any | null,
  callback?: ({ ok, message, value, data }: any) => void,
  optional?: any,
): UnknownAction => ({
  type,
  payload,
  callback,
  optional,
});

export function* showDialog(message = '', type = 'success', toast = 'SHOW_TOAST') {
  yield put(
    actionObject(toast, {
      show: true,
      message,
      type,
    }),
  );

  yield delay(3000);

  yield put(
    actionObject(toast, {
      show: false,
    }),
  );
}

export { statusManagement };
