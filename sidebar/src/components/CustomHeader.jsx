import React, { useState } from 'react';
import { Layout, Button, Input, Form, Modal, Table } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, SearchOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import '../index.css';

const { Search } = Input;
const { Header: AntHeader } = Layout;

const CustomHeader = ({ collapsed, setCollapsed, searchText, setSearchText }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleAdd = () => {
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleFinish = (values) => {
    // Handle form submission
    console.log('Form values:', values);
    setIsModalVisible(false);
  };

  return (
    <AntHeader style={{ padding: 0, background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Button
        type="text"
        className="toggle"
        onClick={() => setCollapsed(!collapsed)}
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      />
      <Search
        placeholder="Search Product"
        allowClear
        enterButton={<SearchOutlined />}
        onSearch={handleSearch}
        style={{ width: 200, marginRight: '16px' }}
      />
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button type="text" icon={<SettingOutlined />} />
        <Button type="text" icon={<UserOutlined />} />
      </div>
    </AntHeader>
  );
};

export default CustomHeader;
