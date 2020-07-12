import React, { Component } from 'react';
import {
  Radio,
  Typography
} from 'antd';

import PictureBox from '../../picture-box';

const { Text } = Typography;

class ColorSelection extends Component {
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
    ];

    this.state = {
      selected: props.selected
    }
  }

  render() {
    const { selected } = this.state;
    const { onSelect } = this.props;
    return(
      <React.Fragment>
        <Text>¿De que color querés tu cuadro?</Text>
        <Radio.Group 
          className="color-radio-group" 
          onChange={(e) => this.setState({ selected: e.target.value }, () => { onSelect(e.target.value) })} 
          defaultValue={selected}>
          { this.colors.map(myColor => (
            <Radio.Button key={myColor.key} value={myColor.key}>{myColor.name}</Radio.Button>))}
        </Radio.Group>
        <PictureBox color={selected} />
      </React.Fragment>);
  }
}

export default ColorSelection;

