import { put, takeLatest } from 'redux-saga/effects';
import { COLLAPSE_DRAWER, COLLAPSE_DRAWER_TRIGGER, EXPAND_DRAWER, EXPAND_DRAWER_TRIGGER } from './action-types';
import { actionObject } from '@/utils';

function* expandDrawerTrigger() {
  yield put(actionObject(EXPAND_DRAWER_TRIGGER));
}

function* collapseDrawerTrigger() {
  yield put(actionObject(COLLAPSE_DRAWER_TRIGGER));
}

export function* watchCollapseDrawerSaga() {
  yield takeLatest(COLLAPSE_DRAWER, collapseDrawerTrigger);
}

export function* watchExpandDrawerSaga() {
  yield takeLatest(EXPAND_DRAWER, expandDrawerTrigger);
}
