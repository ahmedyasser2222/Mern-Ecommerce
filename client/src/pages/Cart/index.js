import React from 'react'

import "./style.scss"
import Products from './Prodcuts'
import Summary from './Summary'

const Cart = () => {
  return (
    <div className='container-app'>
       <div className='container'>
           <div className='cart'>
                 <Products />
                 <Summary  />
           </div>
       </div>
    </div>
  )
}

export default Cart