import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the root state domain
 */

const selectRootDomain = state => state.root || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Root
 */

const makeSelectRoot = () =>
  createSelector(
    selectRootDomain,
    substate => substate,
  );

const makeSelectClients = () =>
  createSelector(
    selectRootDomain,
    substate => substate.clients,
  );

export default makeSelectRoot;
export { selectRootDomain, makeSelectRoot, makeSelectClients };
