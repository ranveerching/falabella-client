import React from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';

export default function PrimarySearchAppBar({ user, logout }) {
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar sticky-top bg-danger justify-content-between">
      <h5 className="mt-3 mb-3 text-white">{`Welcome ${get(
        user,
        'token.fullName',
        'Guest',
      )}`}</h5>

      <button
        className="btn btn-outline-link my-2 my-sm-0 text-white"
        type="button"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
}

PrimarySearchAppBar.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};
