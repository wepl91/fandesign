import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu } from 'antd';
import {
  ShareAltOutlined,
  PictureOutlined,
  InstagramOutlined,
  FacebookOutlined,
  MenuOutlined,
  MenuFoldOutlined,
  HomeOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

class HomeMenu extends Component {
  constructor(props) {
    super(props);
  }

  selectOption(e) {
    const { history } = this.props;
    if (e.key === 'your-painting') {
      history.push('your-painting');
    }
    if (e.key === 'menu-fix') {
      this.setState(prevState => ({
        menuFixed: !prevState.menuFixed,
      }))
    }
    if (e.key === 'home') {
      history.push('home');
    }
  }


  render() {
    return (
      <div 
        className="menu-container" >
        <Menu 
          onClick={(e) => this.selectOption(e)} 
          mode="inline"
          inlineCollapsed
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item>
          <SubMenu icon={<ShareAltOutlined />} title="Redes sociales">
            <Menu.ItemGroup title="">
              <Menu.Item key="facebook" icon={<FacebookOutlined />}>Facebook</Menu.Item>
              <Menu.Item key="instagram" icon={<InstagramOutlined />}>Instagram</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="your-painting" icon={<PictureOutlined />}>Tu cuadro</Menu.Item>
      </Menu>
      </div>);
  }
}

export default withRouter(HomeMenu);
