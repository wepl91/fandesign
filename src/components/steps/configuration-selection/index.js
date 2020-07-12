import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getConfigurationsByType } from '../../../services/configurations'
import {
  Row,
  Card, 
  Col, 
  Typography
} from 'antd';

import Loader from '../../loader';

const { Text } = Typography;
const { Meta } = Card;

class ConfiguraitonSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected,
      isLoading: true,
      configurations: null,
    }
  }

  componentDidMount() {
    const { type } = this.props;
    getConfigurationsByType(type)
      .then((response) => {
        this.setState({
          configurations: response,
          isLoading: false,
        })
      });
  }

  chunkArray (arr, len) {
    let chunks = [], i = 0, n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, i += len));
    }
    return chunks;
  }

  renderLoader() {
    return(
      <Row gutter={24}>
        <Loader />
      </Row>); 
  }

  renderConfigurations() {
    const { configurations, selected } = this.state;
    const { onSelect } = this.props;
    const chunkedConfigurations = this.chunkArray(configurations, 4);
    const styles = {
      width: 240,
      marginBottom: '36px',
    }
    const stylesSelected = {
      width: 240,
      borderColor: '#1890ff',
      marginBottom: '36px',
    }
    return chunkedConfigurations.map(chunk => (
      <Row gutter={24}>
        { chunk.map(config => (
          <Col>
            <Card
              onClick={() => this.setState({ selected: config }, () => onSelect(config))}
              hoverable
              style={JSON.stringify(selected) === JSON.stringify(config) ? stylesSelected : styles}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta 
                title={`${config.height}cm x ${config.width}cm`} 
                description={config.photos_quantity ? `Capacidad: ${config.photos_quantity} fotos` : ''} />
            </Card>
          </Col>
        )) }
      </Row>
    ))
  }

  render() {
    const { isLoading } = this.state;
    return (
      <React.Fragment>
        <Text>¿De que dimenciones?</Text>
        {isLoading && this.renderLoader()}
        {!isLoading && this.renderConfigurations()}
      </React.Fragment>
    )
  }
}

ConfiguraitonSelection.propTypes = {
  onSelect: PropTypes.func,
  type: PropTypes.string,
}

ConfiguraitonSelection.defaultProps = {
  onSelect: () => {},
  type: 'polaroid',
}

export default ConfiguraitonSelection;
