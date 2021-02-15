import React from 'react';
import { Layout } from 'antd';
import AppHeader from './AppHeader';
import ContentRoutes from './ContentRoutes';
import './App.css';

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <AppHeader />
      <Content style={{ padding: '0 50px 0px 50px' }}>
        <ContentRoutes />
      </Content>
      <Footer>
        <div className="gx-layout-footer-content">OPAL © 2021</div>
      </Footer>
    </Layout>
  );
};

export default App
