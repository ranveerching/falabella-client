import React, { memo } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import PropTypes from 'prop-types';

import Auth from './Auth';
import { signIn, signUp } from './actions';

import { makeSelectSignIn } from './selectors';
import { makeSelectDisplayLoader } from '../Loader/selectors';
import reducer from './reducer';
import saga from './saga';

function SignInSide({
  handleSubmitLoginForm,
  handleSubmitSignupForm,
  loading,
}) {
  useInjectReducer({ key: 'signIn', reducer });
  useInjectSaga({ key: 'signIn', saga });

  return (
    <Auth
      handleSubmitLoginForm={handleSubmitLoginForm}
      handleSubmitSignupForm={handleSubmitSignupForm}
      loading={loading}
    />
  );
}

SignInSide.propTypes = {
  handleSubmitLoginForm: PropTypes.func,
  handleSubmitSignupForm: PropTypes.func,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  signIn: makeSelectSignIn(),
  loading: makeSelectDisplayLoader(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleSubmitLoginForm: values => dispatch(signIn(values)),
    handleSubmitSignupForm: values => dispatch(signUp(values)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(SignInSide);
