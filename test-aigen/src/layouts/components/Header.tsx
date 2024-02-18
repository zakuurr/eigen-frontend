import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const items = [
    {
        key: '1',
        label: 'Home',
        path: '/apap'
    }
]
export const HeaderComponent: React.FC = () => {
  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
  )
}
