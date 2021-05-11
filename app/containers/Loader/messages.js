/*
 * Loader Messages
 *
 * This contains all the text for the Loader container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Loader';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Loader container!',
  },
});
