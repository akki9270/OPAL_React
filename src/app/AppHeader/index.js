import React from 'react';
import { withRouter } from 'react-router-dom'
import { Layout, Menu } from 'antd';
import { ROUTES } from '../../common/constants';
import logo from '../../assets/logo192.png'
import '../App.css'

const { Header } = Layout;

const AppHeader = (props) => {
  const { location: { pathname }, history } = props;
  const onMenuSelect = e => {
    history.push(e.key);
  };
  const onLogoImgClick = () => {
    history.push(ROUTES.MAIN);
  };
  return (
    <Header>
      <div className="logo">
        <img src={logo} className='logo-img'
          onClick={onLogoImgClick} />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[`/${pathname.split('/')[1]}`]}
        defaultSelectedKeys={[ROUTES.MAIN]}
        onSelect={onMenuSelect}
      >
        <Menu.Item key={ROUTES.PRODUCT}>Product</Menu.Item>
        <Menu.Item key={ROUTES.CALCULATION}>Calculation</Menu.Item>
        <Menu.Item key={ROUTES.DOCS}>Docs</Menu.Item>
        <Menu.Item key={ROUTES.COMPANY}>Company</Menu.Item>
        <Menu.Item key={ROUTES.CONTACT}>Conatct</Menu.Item>
        <Menu.Item key={ROUTES.SIGNUP} className='right-menu'>Signup</Menu.Item>
        <Menu.Item key={ROUTES.LOGIN} className='right-menu' >Signin</Menu.Item>
      </Menu>
    </Header>
  );
};
export default withRouter(AppHeader);
