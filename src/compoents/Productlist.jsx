import React from 'react'
import ProductCard from './ProductCard'

function Productlist({products}) {

  return (
    <div>
            { 
            products.map(product =>
              <ProductCard product = {product}  key = {product.id} />
            ) 

            }
    </div>  
  )
}

export default Productlist