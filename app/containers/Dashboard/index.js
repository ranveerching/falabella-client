/* eslint-disable no-underscore-dangle */
/**
 *
 * Dashboard
 *
 */

import React, { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import get from 'lodash/get';
import size from 'lodash/size';
import isEqual from 'lodash/isEqual';
import { Row, Modal } from 'antd';
import map from 'lodash/map';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import NavBar from 'components/Navbar';
import SendMail from 'components/SendMail';
import Item from './Item';
import { makeSelectDashboard } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { makeSelectDisplayLoader } from '../Loader/selectors';
import { makeSelectSignIn } from '../SignIn/selectors';

import { signOut } from '../App/actions';

import { sendMail, fetchRegisteredUsers } from './actions';

import './dashboardStyles.css';
export function Dashboard({
  logout,
  user,
  registeredUsers,
  fetchUsers,
  loading,
  handleSendMail,
}) {
  useInjectReducer({ key: 'dashboard', reducer });
  useInjectSaga({ key: 'dashboard', saga });

  const [isModalVisible, setIsModalVisible] = useState(false);

  const { token } = user;

  useEffect(() => {
    if (get(token, 'isAdmin')) {
      fetchUsers();
    }
  }, []);

  return (
    <>
      <NavBar logout={logout} user={user} />

      {get(token, 'isAdmin') ? (
        <div className="admin-page">
          <button
            className="btn btn-danger btn-lg my-2 my-sm-0 text-white compose-mail-btn shadow-lg"
            type="button"
            onClick={() => setIsModalVisible(true)}
            disabled={loading || isEqual(size(registeredUsers.users), 0)}
          >
            Compose Mail
          </button>
          <Row gutter={[30, 30]}>
            {map(registeredUsers.users, item => (
              <Item key={item._id} item={item} />
            ))}
          </Row>

          <Modal
            title="Compose Mail"
            visible={isModalVisible}
            width={1100}
            footer={null}
            onCancel={() => !loading && setIsModalVisible(false)}
            maskClosable={!loading}
            destroyOnClose
          >
            <SendMail
              loading={loading}
              registeredUsers={registeredUsers}
              handleSendMail={handleSendMail}
              setIsModalVisible={setIsModalVisible}
            />
          </Modal>
        </div>
      ) : (
        <h1>Pankaj Sood</h1>
      )}
    </>
  );
}

Dashboard.propTypes = {
  ...Dashboard,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  registeredUsers: makeSelectDashboard(),
  loading: makeSelectDisplayLoader(),
  user: makeSelectSignIn(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchUsers: () => dispatch(fetchRegisteredUsers()),
    handleSendMail: values => dispatch(sendMail(values)),
    logout: () => {
      dispatch(signOut());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Dashboard);
