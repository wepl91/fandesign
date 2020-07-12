import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, Typography } from 'antd';

const { Text } = Typography;
const { Meta } = Card;

class TypeSelection extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selected: props.selected,
    };
  }

  render() {
    const { onSelect } = this.props;
    const { selected } = this.state;
    const styles = {
      width: 240,
      marginBottom: '36px',
    }
    const stylesSelected = {
      width: 240,
      borderColor: '#1890ff',
      marginBottom: '36px',
    }
    return (
      <React.Fragment>
        <Text>¿Que tipo de cuadro vas a armar?</Text>
        <Row gutter={24}>
          <Col>
            <Card
              onClick={() => this.setState({ selected: 'polaroid' }, () => onSelect('polaroid'))}
              hoverable
              style={selected === 'polaroid' ? stylesSelected : styles}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Polaroid" description="Con varias fotos colgando" />
            </Card>
          </Col>
          <Col>
            <Card
              onClick={() => this.setState({ selected: 'lamina' }, () => onSelect('lamina'))}
              hoverable
              style={selected === 'lamina' ? stylesSelected : styles}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Lamina" description="Con imagen de fondo" />
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

TypeSelection.propTypes = {
  onSelect: PropTypes.func,
};

TypeSelection.defaultProps = {
  onSelect: () => {},
}

export default TypeSelection;
