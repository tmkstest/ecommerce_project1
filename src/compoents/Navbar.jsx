import React from 'react'
import { useCart } from '../Context/CartContext'



function Navbar({onCartClick}) {

  const { getCartCount} = useCart();

  
  return (

        <nav>
        <h1>My Store</h1>
        <button onClick={onCartClick}>Cart({ getCartCount()})</button>
        
        </nav>
   
  )
}

export default Navbar;