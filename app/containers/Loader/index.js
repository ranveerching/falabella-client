/**
 *
 * Loader
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import { makeSelectLoader, makeSelectDisplayLoader } from './selectors';
import './loaderStyles.css';
import reducer from './reducer';
import saga from './saga';

export function Loader({ displayLoader }) {
  useInjectReducer({ key: 'loader', reducer });
  useInjectSaga({ key: 'loader', saga });

  return displayLoader ? (
    <div
      className="d-flex flex-row  align-items-start justify-content-start w-100"
      style={{ position: 'absolute', zIndex: 1200, width: '100%' }}
    >
      <div className="linear-activity">
        <div className="indeterminate" />
      </div>
    </div>
  ) : (
    ''
  );
}

Loader.propTypes = {
  ...Loader,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loader: makeSelectLoader(),
  displayLoader: makeSelectDisplayLoader(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Loader);
