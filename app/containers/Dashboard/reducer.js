/*
 *
 * Dashboard reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  FETCH_REGISTERED_USERS,
  FETCH_REGISTERED_USERS_SUCCESS,
  FETCH_REGISTERED_USERS_FAILURE,
} from './constants';

export const initialState = {
  users: [],
};

/* eslint-disable default-case, no-param-reassign */
const dashboardReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
      case FETCH_REGISTERED_USERS:
      case FETCH_REGISTERED_USERS_FAILURE:
        break;
      case FETCH_REGISTERED_USERS_SUCCESS:
        draft.users = action.payload;
        break;
    }
  });

export default dashboardReducer;
