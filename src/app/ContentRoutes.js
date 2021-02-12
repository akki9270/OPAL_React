import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404 from '../Error404';
import Dashboard from '../modules/Dashboard';
import { ROUTES } from '../common/constants';

const ContentRoutes = (props) => {
  console.log('--props: ', props)
  return (
    <Switch>
      <Route path={ROUTES.MAIN} component={Dashboard} />
      <Route path="*" exact component={Error404} />
    </Switch>
  );
};

export default ContentRoutes;
