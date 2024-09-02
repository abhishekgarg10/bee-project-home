import React, { useState } from 'react';
import { Layout } from 'antd';
import CustomHeader from './components/CustomHeader';
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import InventoryManagement from './components/InventoryManagement';
import './index.css';

const { Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [searchText, setSearchText] = useState('');

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsed={collapsed} collapsible trigger={null} className="sidebar">
        <Logo />
        <MenuList />
      </Sider>
      <Layout>
        <CustomHeader
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        <Content style={{ margin: '24px 16px 0', padding: '24px', background: '#fff' }}>
          <InventoryManagement searchText={searchText} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
