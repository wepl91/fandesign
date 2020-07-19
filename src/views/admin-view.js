import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Card, Row, Col, Typography } from 'antd';
import { ReactComponent as ConfigLogo } from '../components/imgs-svg/undraw_personal_settings_kihd.svg';
import { ReactComponent as CustomersLogo } from '../components/imgs-svg/undraw_product_tour_foyt.svg';
import { ReactComponent as PictureLogo } from '../components/imgs-svg/undraw_photos_1nui.svg';

const { Text } = Typography;
const { Meta } = Card;

class AdminView extends Component {
  constructor(props) {
    super(props);
    
    this.picStyles = {
      height: '250',
      borderBottom: 'solid 1px #f3f3f3'
    }
    this.options = [
      {
        key: 'Configuraciones',
        img: <ConfigLogo style={ this.picStyles } />,
        route: '/app/admin/configurations'
      }, {
        key: 'Fotos clientes ',
        img: <CustomersLogo style={ this.picStyles } />,
        route: '/app/admin/images/customers',
      }, {
        key: 'Imagenes para cuadros',
        img: <PictureLogo style={ this.picStyles } />,
        route: '/app/admin/images',
      }
    ]
  }


  render() {
    const { history } = this.props;
    const styles = {
      width: 240,
      marginBottom: '36px',
    }
    return(
      <div className="admin-view">
        <h1>Administración</h1>
        <Text>¿Que queres configurar o editar?</Text>
        <Row gutter={24}>
          { this.options.map(option => (
            <Col>
              <Card
                onClick={() => history.push(option.route)}
                hoverable
                style={styles}
                cover={option.img}
              >
                <Meta title={option.key} />
              </Card>
            </Col>))
          }
        </Row>
      </div>)
  }
}

export default withRouter(AdminView);