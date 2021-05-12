/*
 *
 * SignIn reducer
 *
 */
import produce from 'immer';

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

import { SIGN_IN_SUCCESS, SIGN_UP_SUCCESS } from '../App/constants';

export const initialState = {
  token: {},
};

/* eslint-disable default-case, no-param-reassign */
const signInReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
      case SIGN_IN:
      case SIGN_UP:
      case SET_REGISTERED:
      case SET_REGISTERED_FAIL:
      case SIGN_IN_ERROR:
      case SIGN_UP_ERROR:
        break;
      case SIGN_IN_SUCCESS:
      case SIGN_UP_SUCCESS:
        draft.token = action.payload;
        break;
      case SET_REGISTERED_SUCCESS:
        draft.token = {
          ...draft.token,
          ...action.payload,
        };
    }
  });

export default signInReducer;
