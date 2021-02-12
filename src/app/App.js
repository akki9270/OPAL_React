import React from 'react';
import { Layout } from 'antd';
import AppHeader from './AppHeader';
import ContentRoutes from './ContentRoutes';
import './App.css';

const { Content, Footer } = Layout;

const App = (props) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <AppHeader {...props}/>
      <Content style={{ padding: '10px 50px' }}>
        <div>
          <ContentRoutes />
        </div>       
      </Content>
    </Layout>
  );
};

export default App;
