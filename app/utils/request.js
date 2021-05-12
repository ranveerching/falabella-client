/* eslint-disable no-param-reassign */
import axios from 'axios';
import _ from 'lodash';
import { notification } from 'antd';
import { configuredStore } from '../configureStore';
import { memberSignOut } from '../containers/App/actions';
import { stopLoader, startLoader } from '../containers/Loader/actions';

export const axiosInstance = axios.create({
  baseURL: config.baseURL, //eslint-disable-line
  responseType: 'json',
});

axiosInstance.interceptors.request.use(
  config => {
    configuredStore.dispatch(startLoader());
    const { token } = configuredStore.getState().SignIn;

    if (token && token.id) {
      config.headers['x-auth-token'] = token.id;
      config.headers.id = token.userId;
    }

    config.headers.deviceType = 'web';
    return config;
  },
  err => {
    configuredStore.dispatch(stopLoader());
    return Promise.reject(err);
  },
);

axiosInstance.interceptors.response.use(
  response => {
    configuredStore.dispatch(stopLoader());
    if (_.get(response, 'data.message', null)) {
      notification.success({
        message: response.data.message,
        style: {
          zIndex: 9999,
        },
      });
    }
    return response;
  },
  err => {
    if (!err.response) {
      configuredStore.dispatch(stopLoader());

      notification.error({
        message: 'Something went wrong',
      });
    }
    const url = err.response.config.url
      .split('/')
      .slice(-2)
      .join('/');

    configuredStore.dispatch(stopLoader());

    if (
      err.response.status === 401 &&
      !_.includes(url, 'Member') &&
      err.response.config.method !== 'post'
    ) {
      configuredStore.dispatch(memberSignOut());
    }

    notification.error({
      message: err.response.data.message,
    });
    return Promise.reject(err);
  },
);

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(options) {
  return axiosInstance(options);
}
