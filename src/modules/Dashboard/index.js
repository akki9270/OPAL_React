import React, { Fragment } from 'react'
import './dashboard.css'

export default function Dashbaord() {
  return (
    <div className='d-flex h-100 row justify-content-center align-items-center dashboard-wrapper'>
      <div className='card-group'>
        <div className='card ml-2 mx-2'>
          <div className='card-body text-center section-body d-flex justify-content-center align-items-center'>
            <h1 className='display-4 card-title'>Product</h1>
          </div>
        </div>
        <div className='card mx-2'>
          <div className='card-body text-center section-body'>
            <h1 className='display-4 card-title'>Online</h1>
            <h1 className='display-4 card-title'>Calculation</h1>
          </div>
        </div>
        <div className='card mx-2'>
          <div className='card-body text-center section-body d-flex justify-content-center align-items-center'>
            <h1 className='display-4 card-title'>Docs</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
