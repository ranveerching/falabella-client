/**
 *
 * Lottie
 *
 */

import React, { memo } from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

function LottieAnimation({
  animationData,
  defaultOptions,
  height,
  width,
  style,
}) {
  const options = {
    ...defaultOptions,
    animationData,
  };

  return (
    <Lottie
      options={options}
      height={height}
      width={width}
      isStopped={false}
      isPaused={false}
      isClickToPauseDisabled
      style={style}
    />
  );
}

LottieAnimation.propTypes = {
  animationData: PropTypes.object,
  height: PropTypes.number,
  width: PropTypes.number,
  style: PropTypes.object,
  defaultOptions: PropTypes.object,
};

LottieAnimation.defaultProps = {
  height: null,
  width: null,
  style: null,
  defaultOptions: {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid',
    },
  },
};

export default memo(LottieAnimation);
