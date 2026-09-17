import React, { createContext, useContext, useState } from 'react'


const CartContext = createContext();

export function CardProvider({children}){

 const [cart ,setCart] = useState([]);

 function addToCart(product) {
    setCart(prev =>{
            const exist = prev.find(item =>item.id === product.id);
            if(exist){
                return prev.map(item => item.id === product.id ? {...item,quantity:item.quantity+1}:item)
            }
            return [...prev,{...product,quantity:1}]
        })
    }
 function removeFromCart(id) {
    setCart(prev => prev.filter(item=>item.id != id));

 }
 function getCartCount() {
    return cart.reduce((total,item)=> total + item.quantity,0); 

 }
   function getCartTotal() {

            return cart.reduce((total,item)=> total +item.price * item.quantity,0).toFixed(2)
            
        }
 return(
    <CartContext.Provider value = {{cart,addToCart,removeFromCart,getCartCount,getCartTotal}}>
        {children}
         </CartContext.Provider>

 ) 
 }
export function useCart(){
    return useContext(CartContext);
}
