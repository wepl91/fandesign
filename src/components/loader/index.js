import React, { PureComponent } from 'react';
import {
  Spin, 
  Space,
} from 'antd';

class Loader extends PureComponent {
  render() {
    return(
      <div className="loader">
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </div>);
  }
}

export default Loader;
