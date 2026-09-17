import React from 'react'
import { useCart } from '../Context/CartContext';

function Cart() {
   const {cart,removeFromCart,getCartTotal} = useCart();
    
    if(cart.length === 0) return <p>Your Cart is Empty</p>

  return (
    <div>
        <h2>Your Cart</h2>
        {
            cart.map(item => (
              <div key = {item.id}>
               <img src={item.image} alt={item.title} width = {60} />
               <p>{item.title}</p>
               <p>Qty:{item.quantity}</p>
               <p>${item.price * item.quantity}.toFixed(2)</p>
               <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))
        }
        <h3>Total:${getCartTotal()}</h3>
    </div>
  )
}

export default Cart;