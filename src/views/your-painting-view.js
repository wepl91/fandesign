import React, { Component } from 'react';

import PictureBox from '../components/picture-box';
import { Radio, Row, Col, Spin, Space } from 'antd';

import { getAllConfigurations } from '../services/configurations';

class YourPaintingView extends Component {
  constructor(props) {
    super(props);
    this.colors = [
      {
        key: 'white',
        name: 'Blanco'
      },
      {
        key: 'natural',
        name: 'Natural',
      },
    ]
    this.state = {
      color: 'white',
      size: 1,
      isLoading: true,
    };
  }

  // componentDidMount() {
  //   getAllConfigurations()
  //     .then((response) => {
  //       this.setState({
  //         isLoading: true,
  //       })
  //     });
  // }

  render() {
    const { color, size, isLoading } = this.state;
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    if (isLoading) {
      return(
        <div className="your-painting-view">
          <Space size="large">
            <Spin size="large"/>
          </Space>
        </div>
      )
    }
    return(
      <div className="your-painting-view">
        <h1>Armá tu cuadro</h1>
        <Row>
          <Col span={24} className="painting-firs-col">
            <Radio.Group onChange={(e) => this.setState({ color: e.target.value })} defaultValue={color}>
              { this.colors.map(myColor => (
                <Radio.Button key={myColor.key} value={myColor.key}>{myColor.name}</Radio.Button>))}
            </Radio.Group>
            <PictureBox color={color} />
            <Radio.Group className="size-radiogroup" onChange={() => {}} value={size}>
              <Radio style={radioStyle} value={1}>Tamaño A</Radio>
              <Radio style={radioStyle} value={2}>Tamaño B</Radio>
              <Radio style={radioStyle} value={3}>Tamaño C</Radio>
            </Radio.Group>
          </Col>
        </Row>
      </div>)
  }
}

export default YourPaintingView;