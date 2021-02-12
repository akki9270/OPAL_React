import React, { Fragment } from 'react'
import './dashboard.css'

export default function Dashbaord() {
  return (
    <div style={{ height: '500px' }}>      
      <div className='card-group pt-5'>
        <div className='card mx-2'>        
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
