import { takeLatest, put, call } from 'redux-saga/effects';
import request from 'utils/request';

import { FETCH_REGISTERED_USERS, SEND_MAIL } from './constants';

import {
  fetchRegisteredUsersSuccess,
  fetchRegisteredUsersFail,
  sendMailSuccess,
  sendMailFail,
} from './actions';

function* fetchUsers() {
  try {
    const options = {
      method: 'GET',
      url: '/getRegisteredUsers',
    };

    const response = yield call(request, options);
    yield put(fetchRegisteredUsersSuccess(response.data));
  } catch (e) {
    yield put(fetchRegisteredUsersFail(e));
  }
}

function* sendMailFunc({ values }) {
  const data = { ...values };
  delete data.setIsModalVisible;
  try {
    const options = {
      method: 'POST',
      data,
      url: '/sendMailToUsers',
    };

    yield call(request, options);
    yield put(sendMailSuccess());
    values.setIsModalVisible();
  } catch (e) {
    yield put(sendMailFail(e));
  }
}

export default function* dashboardSaga() {
  yield takeLatest(FETCH_REGISTERED_USERS, fetchUsers);
  yield takeLatest(SEND_MAIL, sendMailFunc);
}
