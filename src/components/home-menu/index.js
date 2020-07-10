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
} from '@ant-design/icons';

const { SubMenu } = Menu;

class HomeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
      collapsed: true,
      menuFixed: false,
    }
  }

  selectOption(e) {
    if (e.key === 'your-painting') {
      this.props.history.push('your-painting');
    }
    if (e.key === 'menu-fix') {
      this.setState(prevState => ({
        menuFixed: !prevState.menuFixed,
      }))
    }
  }

  onMouseOn() {
    const { menuFixed } = this.state;
    if (menuFixed) return;
    setTimeout(() => {
      this.setState({
        collapsed: false,
      })
    }, 200);
  }

  onMouseOff() {
    const { menuFixed } = this.state;
    if (menuFixed) return;
    setTimeout(() => {
      this.setState({
        collapsed: true,
      })
    }, 200);
  }

  render() {
    const { current, menuFixed } = this.state;
    return (
      <div 
        className="menu-container" 
        onMouseEnter={() => this.onMouseOn()}
        onMouseLeave={() => this.onMouseOff()}
        >
        <Menu 
          onClick={(e) => this.selectOption(e)} 
          selectedKeys={[current]} 
          mode="inline"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="menu-fix" icon={menuFixed ? <MenuFoldOutlined /> : <MenuOutlined />} />
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
