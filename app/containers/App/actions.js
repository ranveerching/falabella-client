import {
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS,
  SIGN_OUT,
  MEMBER_SIGN_OUT,
} from './constants';

export function signInSuccess(payload) {
  return {
    type: SIGN_IN_SUCCESS,
    payload,
  };
}

export function signUpSuccess(payload) {
  return {
    type: SIGN_UP_SUCCESS,
    payload,
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}

export function memberSignOut() {
  return {
    type: MEMBER_SIGN_OUT,
  };
}
