import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Typography } from 'antd';

import { loginSchema } from 'utils/validationSchema';
import TextInputComponent from 'components/TextInputComponent';

const { Title } = Typography;

const LoginComponent = props => {
  const { handleSubmitLoginForm, setName, loading } = props;

  return (
    <>
      <Title level={2} className="text-center title mb-0">
        Login
      </Title>
      <div className="separator mt-4 mb-4" />
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => handleSubmitLoginForm(values)}
        validationSchema={loginSchema}
        validateOnChange={false}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextInputComponent
              placeholder="Your email..."
              name="email"
              type="text"
              label="Email"
              values={values.email}
              onChange={handleChange}
              error={errors.email}
            />

            <TextInputComponent
              placeholder="Your password..."
              name="password"
              type="password"
              label="Password"
              values={values.password}
              onChange={handleChange}
              error={errors.password}
            />

            <div className="d-flex flex-row justify-content-between align-items-center">
              <button
                type="button"
                className="btn btn-link text-white"
                onClick={() => setName('signup')}
                disabled={loading}
              >
                Sign Up
              </button>

              <div className="text-right">
                <button className="btn btn-danger" type="submit">
                  Login
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

LoginComponent.propTypes = {
  handleSubmitLoginForm: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default LoginComponent;
