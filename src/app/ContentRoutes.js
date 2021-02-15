import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404 from '../Error404';
import Dashboard from '../modules/Dashboard';
import Product from 'src/modules/Product';


const ContentRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/product" component={Product} />
      <Route component={Error404} />
    </Switch>
  );
};

export default ContentRoutes;
