import React from 'react'
import ProductCart from './ProductCart'
import { Button } from '@mui/material'

const Products = () => {
  return (
    <div className='products'>
         <ProductCart />
         <ProductCart />
         <ProductCart />
         <div className='btn'>
            <Button sx={{ backgroundColor : "#551A8B", color : "white" , width : "200px", ":hover" : {backgroundColor : "#551A8B", color : "white"} }}>
                Continue Shopping
            </Button>
         </div>
    </div>
  )
}

export default Products