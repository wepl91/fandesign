import React, { Component } from 'react';

import { 
  Button, 
  Typography, 
  Card, 
  Row, 
  Col, 
  Divider, 
  Input, 
  Select, 
  notification, 
} from 'antd';

import { withRouter } from "react-router-dom";

import Loader from '../components/loader';
import { createConfiguration, getConfiguration } from '../services/configurations';

import { capitalize } from 'lodash';

const { Text } = Typography;
const { Meta } = Card;
const { Option } = Select;

class AdminConfigurationEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isSaving: false,
      currentConfiguration: {
        height: null,
        width: null,
        orientation: null,
        type: null,
        photos_quantity: null,
        img_url: null,
      },
      docId: props.match.params.id
    }
  }

  componentDidMount() {
    this.getData();
  }

  handleChange(field, value) {
    const { currentConfiguration } = this.state;
    currentConfiguration[field] = value;
    this.setState({
      currentConfiguration,
    });
  }

  handleSave() {
    const { currentConfiguration } = this.state;
    this.setState({
      isSaving: true,
    }, () => {
      createConfiguration(currentConfiguration)
        .then((response) => {
          notification.success({
            message: 'Configuracón creada!',
            description:
              'La configuración ha sido creada exitosamente.',
            onClick: () => {
              this.props.history.push('/app/admin/configurations');
            },
          });
          setTimeout(() => {
            this.props.history.push('/app/admin/configurations');
          }, 2000)
        })
        .catch((err) => {
          debugger
          notification.error({
            message: 'Error en la creación!',
            description:
              'Hubo un problema al crear la configuración. Revisa los datos e intenta nuevamente en unos minutos.',
          });
          this.setState({
            isSaving: false,
          });
        })
    })
  }

  checkDisabled() {
    const { isSaving, isLoading, currentConfiguration } = this.state;
    if (isSaving || isLoading) return true;
    return !currentConfiguration.height || 
           !currentConfiguration.width ||
           !currentConfiguration.type ||
           !currentConfiguration.orientation ||
           !currentConfiguration.photos_quantity;
  }

  getData() {
    const { docId } = this.state;
    if (!docId) {
      this.setState({
        isLoading: false,
      });
    } else {
      getConfiguration(docId)
        .then((response) => {
          this.setState({
            currentConfiguration: response,
            isLoading: false,
          });
        });
    }
  }

  renderLoader() {
    return <Loader />;
  }

  renderForm() {
    const { currentConfiguration } = this.state;
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
      <div className="form">
        <Row gutter={24}>
          <Col>
            <Card
              onClick={() => this.handleChange('type', 'polaroid') }
              hoverable
              style={currentConfiguration.type === 'polaroid' ? stylesSelected : styles}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Polaroid" description="Con varias fotos colgando" />
            </Card>
          </Col>
          <Col>
            <Card
              onClick={() => this.handleChange('type', 'lamina')}
              hoverable
              style={currentConfiguration.type === 'lamina' ? stylesSelected : styles}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Lamina" description="Con imagen de fondo" />
            </Card>
          </Col>
          <Col style={{ width: '20%', marginLeft: '2em', marginTop: '-2em' }}>
            <Divider plain orientation="left">Alto</Divider>
            <Input value={currentConfiguration.height} addonAfter="cm" placeholder="Ej: 15" onChange={(e) => this.handleChange('height', e.target.value)} />
            <Divider plain orientation="left">Ancho</Divider>
            <Input value={currentConfiguration.width} addonAfter="cm" placeholder="Ej: 15" onChange={(e) => this.handleChange('width', e.target.value)} />
            <Divider plain orientation="left">Orientación</Divider>
            <Select defaultValue={currentConfiguration.orientation} style={{ width: '100%' }} onChange={(value) => this.handleChange('orientation', value)}>
              <Option value="horizontal">Horizontal</Option>
              <Option value="vertical">Vertical</Option>
            </Select>
            <Divider plain orientation="left">Cantidad de fotos</Divider>
            <Input value={currentConfiguration.photos_quantity} placeholder="Ej: 6" onChange={(e) => this.handleChange('photos_quantity', e.target.value)} />
          </Col>
        </Row>
      </div>
    )
  }

  render() {
    const { isLoading, isSaving, docId } = this.state;
    return (
      <div className="admin-configuration-edit">
        <h1>Administración</h1>
        <Text>{docId ? 'Editar configuración' : 'Nueva configuración'}</Text>
        {isLoading && this.renderLoader()}
        {!isLoading && this.renderForm()}
        <Button 
          className="save-button" 
          disabled={this.checkDisabled()} 
          type="primary"
          onClick={() => this.handleSave()}
        >{isSaving ? 'Guardando...' : 'Guardar'}</Button>
      </div>)
  }
}

export default withRouter(AdminConfigurationEdit);