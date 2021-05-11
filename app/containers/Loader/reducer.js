/*
 *
 * Loader reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, START_LOADER, STOP_LOADER } from './constants';

export const initialState = {
  loader: false,
};

/* eslint-disable default-case, no-param-reassign */
const loaderReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case START_LOADER:
        draft.loader = true;
        break;
      case STOP_LOADER:
        draft.loader = false;
        break;
    }
  });

export default loaderReducer;
