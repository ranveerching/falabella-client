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
        break;
      case SIGN_IN:
      case SIGN_UP:
        break;
      case SIGN_IN_ERROR:
      case SIGN_UP_ERROR:
        break;
      case SIGN_IN_SUCCESS:
      case SIGN_UP_SUCCESS:
        draft.token = action.payload;
        break;
    }
  });

export default signInReducer;
