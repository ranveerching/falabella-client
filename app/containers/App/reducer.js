/*
 *
 * Shobhit reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  persisted: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, () => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default appReducer;
