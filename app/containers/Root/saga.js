import { takeLatest, put } from 'redux-saga/effects';
import { memberSignOut } from '../App/actions';
import { SIGN_OUT } from '../App/constants';

function* signOutMember() {
  yield put(memberSignOut());
}

export default function* rootSaga() {
  yield takeLatest(SIGN_OUT, signOutMember);
}
