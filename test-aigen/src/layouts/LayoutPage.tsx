import React, { ReactNode } from 'react';
import { Breadcrumb, Layout } from 'antd';
import { HeaderComponent } from './components/Header';

const { Content, Footer } = Layout;

interface LayoutPageProps {
  children: ReactNode;
}

const LayoutPage: React.FC<LayoutPageProps> = ({ children }) => {
  return (
    <Layout>
      <HeaderComponent />
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design
      </Footer>
    </Layout>
  );
};

export default LayoutPage;
