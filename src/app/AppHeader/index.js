import React from 'react';
import { withRouter } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { ROUTES } from '../../common/constants';
// import history from '../../history';
import logo from '../../assets/logo192.png'
import '../App.css'

const { Header } = Layout;

const AppHeader = (props) => {
  const onMenuSelect = e => {    
    const { history } = props;
    history.push(e.key);
  };  
  return (
    <Header>
      <div className="logo">
        <img src={logo} style={{ width: '40px' }} />
      </div>
      <Menu 
        theme="dark" 
        mode="horizontal"
        onSelect={onMenuSelect}
      >
        <Menu.Item key={ROUTES.PRODUCT}>Product</Menu.Item>
        <Menu.Item key={ROUTES.CALCULATION}>Calculation</Menu.Item>
        <Menu.Item key={ROUTES.DOCS}>Docs</Menu.Item>
        <Menu.Item key={ROUTES.COMPANY}>Company</Menu.Item>
        <Menu.Item key={ROUTES.CONTACT}>Conatct</Menu.Item>
      </Menu>
    </Header>
  );
};
export default withRouter(AppHeader);
