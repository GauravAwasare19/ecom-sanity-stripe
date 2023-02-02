import React from 'react'

import {Product, FooterBanner, HeroBanner} from '../components'

export default function Home() {
  return (
    <>
    heroBanner

    <div>
      <h2 className="products-heading">Best Selling Products</h2>
      <p >Speakers of many variations</p>
    </div>

    <div className="products-container">
      {['Product1','Product2'].map((product)=>product)}
    </div>

    Footer
    </>
  )
}
