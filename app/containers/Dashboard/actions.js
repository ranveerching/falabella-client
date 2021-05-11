/*
 *
 * Dashboard actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_REGISTERED_USERS,
  FETCH_REGISTERED_USERS_SUCCESS,
  FETCH_REGISTERED_USERS_FAILURE,
  SEND_MAIL,
  SEND_MAIL_SUCCESS,
  SEND_MAIL_FAIL,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchRegisteredUsers() {
  return {
    type: FETCH_REGISTERED_USERS,
  };
}

export function fetchRegisteredUsersSuccess(payload) {
  return {
    type: FETCH_REGISTERED_USERS_SUCCESS,
    payload,
  };
}

export function fetchRegisteredUsersFail() {
  return {
    type: FETCH_REGISTERED_USERS_FAILURE,
  };
}

export function sendMail(payload) {
  return {
    type: SEND_MAIL,
    values: payload,
  };
}

export function sendMailSuccess() {
  return {
    type: SEND_MAIL_SUCCESS,
  };
}

export function sendMailFail() {
  return {
    type: SEND_MAIL_FAIL,
  };
}
