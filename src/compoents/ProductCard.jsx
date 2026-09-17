import React from 'react'
import { useCart } from '../Context/CartContext'



function ProductCard({product}) {
const {addToCart} = useCart();

  return (
    <div> 
        <img src={product.image} />
        <h3>{product.title}</h3>
        <h3>{product.price}</h3>
        <button onClick={()=>addToCart(product)}>Add to cart</button>
    </div>
  )
}

export default ProductCard;