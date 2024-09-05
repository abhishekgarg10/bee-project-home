// src/components/MenuList.js
import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, AreaChartOutlined, AccountBookOutlined, FundViewOutlined, SubnodeOutlined, MailOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import '../index.css';

const MenuList = () => {
  return (
    <Menu theme="dark" mode="inline" className="Menu-bar">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.SubMenu key="inventory" icon={<ShoppingCartOutlined />} title="Inventory">
        <Menu.Item key="inventory-task-1">
          <Link to="/inventory">Task 1</Link>
        </Menu.Item>
        {/* Other inventory tasks */}
      </Menu.SubMenu>
      {/* Additional SubMenus */}
    </Menu>
  );
};

export default MenuList;
