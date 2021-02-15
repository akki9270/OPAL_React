import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Error404 from '../Error404';
import Dashboard from '../modules/Dashboard';
import { ROUTES } from '../common/constants';

const ContentRoutes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path={ROUTES.MAIN} component={Dashboard} />
        <Route component={Error404} />
      </Switch>
    </Fragment>
  );
};

export default ContentRoutes;
