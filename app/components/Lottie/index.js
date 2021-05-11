/**
 *
 * Lottie
 *
 */

import React, { memo } from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

function LottieAnimation({ animationData, height, width, style }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid',
    },
  };

  return (
    <Lottie
      options={defaultOptions}
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
};

LottieAnimation.defaultProps = {
  height: null,
  width: null,
  style: null,
};

export default memo(LottieAnimation);
