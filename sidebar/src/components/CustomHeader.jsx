import React, { useState } from 'react';
import { Layout, Button, Form, Menu, Dropdown } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
import '../index.css';

const { Header: AntHeader } = Layout;

const CustomHeader = ({ collapsed, setCollapsed }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleAdd = () => {
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFinish = (values) => {
    console.log('Form values:', values);
    setIsModalVisible(false);
  };

  // Define menu items for the dropdown
  const userMenu = (
    <Menu>
      <Menu.Item key="1">
        <Button type="text">Type 1</Button>
      </Menu.Item>
      <Menu.Item key="2">
        <Button type="text">Type 2</Button>
      </Menu.Item>
      <Menu.Item key="3">
        <Button type="text">Type 3</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <AntHeader
      style={{
        padding: 0,
        background: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Button
        type="text"
        className="toggle"
        onClick={() => setCollapsed(!collapsed)}
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      />
      
      
        

      

      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        {/* Dropdown for user icon with menu */}
        <Dropdown overlay={userMenu} trigger={['click']}>
          <Button type="text" icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </AntHeader>
  );
};

export default CustomHeader;
