import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404 from '../Error404';
import Dashboard from '../modules/Dashboard';
import Product from 'src/modules/Product';
import Signup from 'src/modules/auth/Signup';
import Login from 'src/modules/auth/Login';
import { ROUTES } from 'src/common/constants';

const ContentRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path={ROUTES.SIGNUP} component={Signup} />
      <Route exact path={ROUTES.LOGIN} component={Login} />
      <Route path={ROUTES.PRODUCT} component={Product} />
      <Route component={Error404} />
    </Switch>
  );
};

export default ContentRoutes;
