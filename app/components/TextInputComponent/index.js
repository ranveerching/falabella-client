import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from 'antd';

const { Title } = Typography;

const TextInputComponent = props => {
  const { label, error, labelClass } = props;

  return (
    <div className="mb-4">
      <div className="d-flex flex-row justify-content-between align-items-center mb-2">
        <Title level={5} className={labelClass}>
          {label}
        </Title>

        {error && (
          <div className="text-left">
            <Title level={5} className="text-danger font-italic m-0">
              {error}
            </Title>
          </div>
        )}
      </div>

      <input
        {...props}
        className="form-control form-control-md text-white"
        style={{ backgroundColor: 'rgb(32, 32, 32)', borderColor: '#626368' }}
      />
    </div>
  );
};

TextInputComponent.propTypes = {
  label: PropTypes.string,
  error: PropTypes.any,
  labelClass: PropTypes.string,
};

TextInputComponent.defaultProps = {
  labelClass: 'text-left text-white m-0',
};

export default TextInputComponent;
