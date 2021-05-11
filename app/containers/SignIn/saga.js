import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { SIGN_IN, SIGN_UP } from './constants';

import { signInError, signUpError } from './actions';
import { signInSuccess, signUpSuccess } from '../App/actions';

function* signIn({ values }) {
  try {
    const options = {
      method: 'POST',
      data: values,
      url: '/auth/login',
    };

    const response = yield call(request, options);
    const signInPayload = {
      ...response.data,
      id: response.headers['x-auth-token'],
    };
    yield put(signInSuccess(signInPayload));
  } catch (e) {
    yield put(signInError(e));
  }
}

function* signUp({ values }) {
  try {
    const options = {
      method: 'POST',
      data: values,
      url: '/auth/signup',
    };

    const response = yield call(request, options);
    const signUpPayload = {
      ...response.data,
      id: response.headers['x-auth-token'],
    };
    yield put(signUpSuccess(signUpPayload));
  } catch (e) {
    yield put(signUpError(e));
  }
}

export default function* signInSaga() {
  yield takeLatest(SIGN_IN, signIn);
  yield takeLatest(SIGN_UP, signUp);
}
