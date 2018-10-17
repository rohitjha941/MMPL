import React from 'react';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import { withRouter } from 'react-router-dom';
import  {NavLink } from "react-router-dom"
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: '12em'}}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
            <Menu.Item key="Faculty"> <NavLink to ="/faculty">Faculty</NavLink> </Menu.Item>
            <Menu.Item key="phd"> <NavLink to ="/phd">Ph.D</NavLink></Menu.Item>
            <Menu.Item key="Mtech"><NavLink to = "/mtech">M.Tech</NavLink> </Menu.Item>
            <Menu.Item key="btech "><NavLink to = "/btech">B.Tech</NavLink></Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(Sider);
