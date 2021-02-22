import React, { Fragment } from 'react'
import { ROUTES } from '../../common/constants'
import { Popover } from 'antd'
import './dashboard.css'

const Dashbaord = ({ history }) => {
  const onCardClick = (routePath) => {
    history.push(routePath)
  }
  const productContent = (
    <div>
      Product Details
    </div>
  );
  const calculationContent = (
    <div>
      Online calculation Details
    </div>
  );
  const docsContent = (
    <div>
      Documents Details
    </div>
  );
  return (
    <div className='d-flex h-100 row justify-content-center align-items-center dashboard-wrapper'>
      <div className='card-group'>
        <Popover content={productContent  }>
          <div className='card mx-2' onClick={() => onCardClick(ROUTES.PRODUCT)}>
            <div className='card-body text-center section-body d-flex justify-content-center align-items-center'>
              <h1 className='display-4 card-title'>Product</h1>
            </div>
          </div>
        </Popover>
        <Popover content={calculationContent}>
          <div className='card mx-2' onClick={() => onCardClick(ROUTES.CALCULATION)}>
            <div className='card-body text-center section-body'>
              <h1 className='display-4 card-title'>Online</h1>
              <h1 className='display-4 card-title'>Calculation</h1>
            </div>
          </div>
        </Popover>
        <Popover content={docsContent}>
          <div className='card mx-2' onClick={() => onCardClick(ROUTES.DOCS)}>
            <div className='card-body text-center section-body d-flex justify-content-center align-items-center'>
              <h1 className='display-4 card-title'>Docs</h1>
            </div>
          </div>
        </Popover>
      </div>
    </div>
  )
}

export default Dashbaord
