import React, { useEffect, useState } from 'react'

import "./style.scss"
import Products from './Prodcuts'
import Summary from './Summary'
import Cookies from 'js-cookie'
import CircularProgressLoading from '../../components/CircularProgressLoading'
import axios from 'axios'
import { URL } from "../../API"

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const [ cartProduct , setCartProduct ] = useState({ cart : [] })
  
  useEffect(()=>{
    async function getData(){
      try {
        setLoading(true);
        const res = await axios.get(`${URL}/api/v1/getcartproducts`, { headers : { Authorization :`Bearer ${Cookies.get("token")}` } });
        setCartProduct(res.data.cartProducts)
        console.log(res.data)
        setLoading(false);
      } catch (err) {
         setLoading(false);
         setCartProduct(null)
      }
    }
    getData()
  },[])
  
  const deleteProduct = (product) =>{
   const ind = cartProduct.cart.indexOf(product)
   cartProduct.cart.splice(ind,1)
   setCartProduct({cart : cartProduct.cart })
  }
 
  return (
    <div className='container-app'>
       <div className='container'>
           <div className='cart'>
                 {cartProduct.cart.length ? <Products products={cartProduct.cart} deleteProduct={deleteProduct}/> :  <p className='products'>Cart Empity </p> }
                 <Summary  />
           </div>
           <CircularProgressLoading loading={loading} />
       </div>
    </div>
  )
}

export default Cart