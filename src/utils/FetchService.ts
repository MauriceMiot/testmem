import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { fallbackRestUrl } from './path';
import { actionObject } from './common';
import { SHOW_LOADING } from '@/store/intermitence/action-types';

const API_URL = process.env.REST_URL || fallbackRestUrl;

function* FetchService(url: any, method = 'GET', variables = {}, auth: any = null): any {
  try {
    yield put(actionObject(SHOW_LOADING, true));
    const headers: any = {
      'Content-Type': 'application/json',
    };

    if (auth) headers.Authorization = `Bearer ${auth}`;

    const response = yield call(axios, `${API_URL}/${url}`, {
      headers,
      method: method,
      data: variables,
    });
    yield put(actionObject(SHOW_LOADING, false));
    return response.data;
  } catch (err: any) {
    yield put(actionObject(SHOW_LOADING, false));
    throw new Error(JSON.stringify(err?.response?.data) || '');
  }
}

export default FetchService;
