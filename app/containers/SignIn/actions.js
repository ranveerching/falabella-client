/*
 *
 * SignIn actions
 *
 */

import {
  DEFAULT_ACTION,
  SIGN_IN,
  SIGN_IN_ERROR,
  SIGN_UP,
  SIGN_UP_ERROR,
  SET_REGISTERED,
  SET_REGISTERED_SUCCESS,
  SET_REGISTERED_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function signIn(values) {
  return {
    type: SIGN_IN,
    values,
  };
}

export function signInError() {
  return {
    type: SIGN_IN_ERROR,
  };
}

export function signUp(values) {
  return {
    type: SIGN_UP,
    values,
  };
}

export function signUpError() {
  return {
    type: SIGN_UP_ERROR,
  };
}

export function setRegistered(payload) {
  return {
    type: SET_REGISTERED,
    values: payload,
  };
}

export function setRegisteredSuccess(payload) {
  return {
    type: SET_REGISTERED_SUCCESS,
    payload,
  };
}

export function setRegisteredFail() {
  return {
    type: SET_REGISTERED_FAIL,
  };
}
