/*
 *
 * Loader actions
 *
 */

import { DEFAULT_ACTION, START_LOADER, STOP_LOADER } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function startLoader() {
  return {
    type: START_LOADER,
  };
}

export function stopLoader() {
  return {
    type: STOP_LOADER,
  };
}
