/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React, { useEffect } from 'react';
import history from 'utils/history';

export default function NotFound() {
  useEffect(() => {
    history.push('/login');
  }, []);

  return <></>;
}
