/**
 *
 * ResponsiveGrid
 *
 */

import React from 'react';
import { Col, Card, Typography } from 'antd';
import PropTypes from 'prop-types';
import get from 'lodash/get';

const { Title } = Typography;

const CustomCard = props => {
  const { gridConfig, bordered, item } = props;

  return (
    <Col
      xs={gridConfig.xs}
      sm={gridConfig.sm}
      md={gridConfig.md}
      lg={gridConfig.lg}
      xl={gridConfig.xl}
      xxl={gridConfig.xxl}
    >
      <Card
        bordered={bordered}
        size="small"
        className="responsive-grid-title shadow-lg custom-card"
        cover={
          <div className="d-flex justify-content-center align-items-center image-container">
            <div className="linear-gradient-container">
              <div className="rating-container">
                <div className="d-flex flex-row align-items-center">
                  <Title
                    level={4}
                    className="text-white pt-1 pl-2 font-italic m-0 text-wrap"
                  >
                    {get(item, 'fullName', 'N/A')}
                  </Title>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <Card.Meta
          description={
            <Title
              level={4}
              className="text-danger text-left mt-3 mb-3 ml-2 mr-2 text-wrap"
            >
              {get(item, 'email', 'N/A')}
            </Title>
          }
        />
      </Card>
    </Col>
  );
};

CustomCard.propTypes = {
  gridConfig: PropTypes.object,
  direction: PropTypes.string,
  bordered: PropTypes.bool,
  item: PropTypes.object.isRequired,
};

CustomCard.defaultProps = {
  bordered: false,
  direction: 'vertical',
  gridConfig: {
    xs: 24,
    sm: 24,
    md: 12,
    lg: 12,
    xl: 8,
    xxl: 8,
  },
};

export default CustomCard;
