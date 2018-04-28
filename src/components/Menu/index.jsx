import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;

export default class Sider extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }
  render() {
    let menu = [
      { text: 'General', children: [{ text: 'button' }, { text: 'icon' }] }
    ]
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        mode="inline"
      >
        {menu.length > 0 && menu.map((item, index) =>
          <SubMenu key={index} title={item.text}>
            {item.children.length > 0 && item.children.map((v, i) => <Menu.Item key={i}>{v.text}</Menu.Item>)}
          </SubMenu>)
        }
      </Menu>
    );
  }
}