import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loader state domain
 */

const selectLoaderDomain = state => state.loader || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Loader
 */

const makeSelectLoader = () =>
  createSelector(
    selectLoaderDomain,
    substate => substate,
  );

const makeSelectDisplayLoader = () =>
  createSelector(
    selectLoaderDomain,
    substate => substate.loader,
  );

export default makeSelectLoader;
export { selectLoaderDomain, makeSelectDisplayLoader, makeSelectLoader };
