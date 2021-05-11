/**
 *
 * Asynchronously loads the component for Lottie
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
