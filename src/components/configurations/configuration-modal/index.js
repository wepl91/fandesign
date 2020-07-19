import React, { Component } from 'react';
import { 
  Modal, 
  Divider, 
  Input,
  Select, 
} from 'antd';

const { Option } = Select;

class ConfigurationModal extends Component {
  constructor(props) {
    super(props);
    const { configuration } = props;
    const structure = {
      height: configuration ? configuration.height : null,
      width: configuration ? configuration.width : null,
      orientation: configuration ? configuration.orientation : null,
      type: configuration ? configuration.type : null,
      photos_quantity: configuration ? configuration.photos_quantity : null,
      img_url: configuration ? configuration.img_url : null,
    };
    this.state = {
      currentConfiguration: structure,
    }
    this.keyMap = {
      height: 'Alto',
      width: 'Ancho',
      orientation: 'Orientación',
      type: 'Tipo',
      photos_quantity: 'Cantidad de fotos',
      img_url: 'URL imagen'
    }
  }

  checkDisabled() {
    const { currentConfiguration } = this.state;
    const { height, width, orientation, type, img_url, photos_quantity } = currentConfiguration;
    return !height || !width || !orientation || !type;
  }

  renderField(field, value) {
    if (field === 'type') {
      return(
        <Select defaultValue={value} style={{ width: 120 }} onChange={(value) => { debugger; }}>
          <Option value="polaroid">Polaroid</Option>
          <Option value="lamina">Lamina</Option>
        </Select>)
    }
    if (field === 'orientation') {
      return(
        <Select defaultValue={value} style={{ width: 120 }} onChange={(value) => { debugger; }}>
          <Option value="vertical">Vertical</Option>
          <Option value="horizontal">Horizontal</Option>
        </Select>)
    }
    return (
      <Input value={value} onChange={(e) => { debugger }}/>
    )
  }

  render() {
    const { open, onAccept, onCancel, configuration } = this.props;
    const { currentConfiguration } = this.state;
    return (
      <Modal
        title={ configuration && configuration.id ? 'Editar configuración' : 'Nueva configuración' }
        visible={open}
        onOk={() => onAccept()}
        onCancel={() => onCancel()}
        okButtonProps={this.checkDisabled()}
      >
      { Object.keys(currentConfiguration).map(key => (
        <React.Fragment>
          <Divider plain orientation="left">{this.keyMap[key]}</Divider>
          {this.renderField(key, currentConfiguration[key])}
        </React.Fragment>
      )) }
      </Modal>
    )
  }
}

export default ConfigurationModal;