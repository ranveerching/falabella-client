/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import history from 'utils/history';
import RootContainer from '../Root/index';

history.listen(() => {
  window.scrollTo(0, 0);
});

export default function App() {
  return (
    <div style={{ height: '100vh' }}>
      <RootContainer />
    </div>
  );
}
