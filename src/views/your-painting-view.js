import React, { Component } from 'react';

import PictureBox from '../components/picture-box';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import {
  Row,
  Col,
  Spin,
  Space,
  Button,
} from 'antd';

import TypeSelection from '../components/steps/type-selection';
import ConfigurationSelection from '../components/steps/configuration-selection';
import ColorSelection from '../components/steps/color-selection';

import { getAllConfigurations } from '../services/configurations';

class YourPaintingView extends Component {
  constructor(props) {
    super(props);

    this.steps = [
      'type',
      'configuration',
      'color',
      'content',
      'customer'
    ]

    this.state = {
      type: null,
      configuration: null,
      content: null,
      customer: null,
      color: 'natural',
      currentStep: 'type',
    };
  }

  nextStep() {
    const { currentStep } = this.state;
    this.setState({
      currentStep: this.steps[this.steps.indexOf(currentStep) + 1]
    })
  }

  prevStep() {
    const { currentStep } = this.state;
    this.setState({
      currentStep: this.steps[this.steps.indexOf(currentStep) - 1]
    })
  }

  checkDisable() {
    const { currentStep } = this.state;
    if (currentStep === 'type') {
      const { type } = this.state;
      return type === null || type === undefined || type === '';
    }
    if (currentStep === 'configuration') {
      const { configuration } = this.state;
      return configuration === null ||
        configuration === undefined ||
        Object.keys(configuration).length < 1;
    }
  }

  render() {
    const {
      color,
      size,
      isLoading,
      currentStep,
      type,
      configuration,
    } = this.state;
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    if (isLoading) {
      return (
        <div className="your-painting-view">
          <Space size="large">
            <Spin size="large" />
          </Space>
        </div>
      )
    }
    return (
      <div className="your-painting-view">
        <h1>Armá tu cuadro</h1>
        <Row>
          <Col span={24} className="painting-firs-col">
            {currentStep === 'type' ?
              <TypeSelection
                selected={type}
                onSelect={(type) => this.setState({ type: type })} /> : null}
            {currentStep === 'configuration' ?
              <ConfigurationSelection
                type={type}
                selected={configuration}
                onSelect={(configuration) => this.setState({ configuration: configuration })} /> : null}
            {currentStep === 'color' ?
              <ColorSelection selected={color} onSelect={(color) => this.setState({ color: color })} /> : null}
          </Col>
        </Row>
        <Row className="steps-buttons" align="middle" justify="center">
          {this.steps.indexOf(currentStep) > 0 ?
            <React.Fragment>
              <LeftOutlined style={{ color: '#1890ff' }} />
              <Button
                onClick={() => this.prevStep()}
                type="link"
              >Anterior</Button>
            </React.Fragment>
            : null}
          <Button
            disabled={this.checkDisable()}
            onClick={() => this.nextStep()}
            type="link"
          >Siguiente</Button>
          <RightOutlined style={{ color: this.checkDisable() ? 'rgba(0, 0, 0, 0.25)' : '#1890ff' }} />
        </Row>
      </div>)
  }
}

export default YourPaintingView;