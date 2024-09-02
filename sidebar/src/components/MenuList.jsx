// src/components/MenuList.js
import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AreaChartOutlined, AccountBookOutlined, FundViewOutlined, SubnodeOutlined, MailOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import '../index.css';

const MenuList = () => {
  return (
    <Menu theme="dark" mode="inline" className="Menu-bar">
      <Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item>
      <Menu.SubMenu key="inventory" icon={<ShoppingCartOutlined />} title="Inventory">
        <Menu.Item key="inventory-task-1">Task 1</Menu.Item>
        <Menu.Item key="inventory-task-2">Task 2</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="sales" icon={<FundViewOutlined />} title="Sales">
        <Menu.Item key="sales-task-1">Task 1</Menu.Item>
        <Menu.Item key="sales-task-2">Task 2</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="purchases" icon={<AccountBookOutlined />} title="Purchases">
        <Menu.Item key="purchases-task-1">Task 1</Menu.Item>
        <Menu.Item key="purchases-task-2">Task 2</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="integration" icon={<SubnodeOutlined />}>Integration</Menu.Item>
      <Menu.Item key="reports" icon={<AreaChartOutlined />}>Reports</Menu.Item>
      <Menu.Item key="documents" icon={<MailOutlined />}>Documents</Menu.Item>
    </Menu>
  );
};

export default MenuList;
