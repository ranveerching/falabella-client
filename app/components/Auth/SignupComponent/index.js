import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import get from 'lodash/get';
import { Typography } from 'antd';

import { signUpSchema } from 'utils/validationSchema';
import TextInputComponent from 'components/TextInputComponent';

const { Title } = Typography;

const SignupComponent = props => {
  const { handleSubmitSignupForm, setName, loading } = props;

  return (
    <>
      <Title level={2} className="text-center title mb-0">
        Sign Up
      </Title>
      <div className="separator mt-4 mb-4" />
      <Formik
        initialValues={{ fullName: '', email: '', password: '' }}
        onSubmit={values => handleSubmitSignupForm(values)}
        validationSchema={signUpSchema}
        validateOnChange={false}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextInputComponent
              placeholder="Your full name..."
              name="fullName"
              type="text"
              label="Full Name"
              values={get(values, 'fullName', '')}
              onChange={handleChange}
              error={get(errors, 'fullName', null)}
            />
            <TextInputComponent
              placeholder="Your email..."
              name="email"
              type="text"
              label="Email"
              values={get(values, 'email', '')}
              onChange={handleChange}
              error={get(errors, 'email', null)}
            />

            <TextInputComponent
              placeholder="Your password..."
              name="password"
              type="password"
              label="Password"
              values={get(values, 'password', '')}
              onChange={handleChange}
              error={get(errors, 'password', null)}
            />

            <div className="d-flex flex-row justify-content-between align-items-center">
              <button
                type="button"
                className="btn btn-link text-white"
                onClick={() => setName('login')}
                disabled={loading}
              >
                Login
              </button>

              <div className="text-right">
                <button
                  className="btn btn-danger"
                  type="submit"
                  disabled={loading}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

SignupComponent.propTypes = {
  handleSubmitSignupForm: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SignupComponent;
