import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import axios from 'axios'
import Navbar from './compoents/Navbar'
import Productlist from  './compoents/Productlist'


function App() {
  const [products,setProducts]= useState([]);
  const [showCart,setShowCart] = useState(false);

    useEffect( ()=>{
      axios.get("https://fakestoreapi.com/products")
      .then((res)=>setProducts(res.data))
    },[])
  return (
    <>
    < Navbar onCartClick = {()=>setShowCart(!showCart)}/> 
    
    { showCart ? < Cart/> : <Productlist products ={products}/>}
    </>
   
  );
}

export default App;
