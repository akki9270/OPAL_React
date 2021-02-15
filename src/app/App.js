import React from 'react';
import { Layout } from 'antd';
import AppHeader from './AppHeader';
import ContentRoutes from './ContentRoutes';
import './App.css';

const { Content } = Layout;

const App = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <AppHeader />
      <Content style={{ padding: '25px 50px' }}>
        <ContentRoutes />
      </Content>
    </Layout>
  );
};

export default (App)
