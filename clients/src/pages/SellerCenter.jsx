import React from 'react'
import SellerNav from '../sellers-components/SellerNav'
import './sellcenter.scss';

const SellerCenter = () => {
  return (
    <div className='sell-center'>
      <div className="sell-center-left">
      <SellerNav/>
      </div>
      <div className="sell-center-right">
        <div className="sell-center-title">
          <h1>Seller Center</h1>
          <div className="sell-date">
            <p>19 Mar, 2024</p>
          </div>
        </div>


      </div>


    </div>
  )
}

export default SellerCenter