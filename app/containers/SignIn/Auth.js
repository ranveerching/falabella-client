/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './authStyles.css';
import LoginComponent from 'components/Auth/LoginComponent';
import SignupComponent from 'components/Auth/SignupComponent';
import LottieAnimation from 'components/Lottie';

import bgAnimationData from 'assests/animationFiles/bgAnimation.json';

const Auth = props => {
  const { handleSubmitLoginForm, handleSubmitSignupForm, loading } = props;
  const [name, setName] = useState('');

  let selectedClass = '';

  if (name === 'login') {
    selectedClass = 'animateForward';
  } else if (name === 'signup') {
    selectedClass = 'animateBack';
  }

  return (
    <div className="login-container">
      <LottieAnimation
        animationData={bgAnimationData}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      />

      <div className="login-panel d-flex flex-row align-items-center">
        <div className="w-50 left-side">
          <LoginComponent
            setName={setName}
            handleSubmitLoginForm={handleSubmitLoginForm}
            loading={loading}
          />
        </div>

        <div className="w-50 right-side">
          <SignupComponent
            setName={setName}
            handleSubmitSignupForm={handleSubmitSignupForm}
            loading={loading}
          />
        </div>
        <div className={`w-50 login-bg h-100 ${selectedClass}`} />
      </div>
    </div>
  );
};

Auth.propTypes = {
  handleSubmitLoginForm: PropTypes.func.isRequired,
  handleSubmitSignupForm: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Auth;
