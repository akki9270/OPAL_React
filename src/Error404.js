import { Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  console.log('Errror404')
  return (
    <Card>
      <div className='d-flex h-100 row justify-content-center align-items-center'>
        <div className="card-body text-center">
          <h2 className="card-title">404</h2>
          <h4 className="card-subtitle mb-2 text-muted"> Oops, an error has occurred. Page not found!</h4>
          <p className="card-subtitle text-center">
            <Link to="/">
              Home
            </Link>
          </p>
        </div>
      </div>
    </Card>
  )
}

export default Error404;
