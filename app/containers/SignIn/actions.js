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
  FETCH_REGISTERED_USERS_SUCCESS,
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

export function registeredUsersSuccess(payload) {
  return {
    type: FETCH_REGISTERED_USERS_SUCCESS,
    payload,
  };
}
