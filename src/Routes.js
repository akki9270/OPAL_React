import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import history from './history';
import PrivateRoute from './PrivateRoute';
import App from './app/App';

const Routes = () => {
  return (
    <Fragment>
      <Router history={history}>
        <Switch>                    
          <PrivateRoute path="/" component={App} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default Routes;