import { Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => (
  <Card>
    <div class="card-body">
      <h2 class="card-title">404</h2>
      <h4 class="card-subtitle mb-2 text-muted"> Oops, an error has occurred. Page not found!</h4>
      <p className="card-subtitle text-center">
        <Link to="/">
          Home
          </Link>
      </p>
    </div>
  </Card>
);

export default Error404;
