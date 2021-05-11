/**
 *
 * Root
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Switch, Route } from 'react-router-dom';
import history from 'utils/history';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import DashboardContainer from '../Dashboard';

import { makeSelectRoot } from './selectors';
import reducer from './reducer';
import saga from './saga';

import SignInContainer from '../SignIn';
import Loader from '../Loader/index';
import {
  userIsAuthenticatedRedir,
  userIsNotAuthenticatedRedir,
} from '../../auth';

import GlobalStyle from '../../global-styles';

const SignIn = userIsNotAuthenticatedRedir(SignInContainer);
const Dashboard = userIsAuthenticatedRedir(DashboardContainer);

history.listen(() => {
  window.scrollTo(0, 0);
});

export function Root() {
  useInjectReducer({ key: 'root', reducer });
  useInjectSaga({ key: 'root', saga });

  return (
    <div>
      <Loader />
      <Switch>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

Root.propTypes = {
  ...Root,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  root: makeSelectRoot(),
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
)(Root);
