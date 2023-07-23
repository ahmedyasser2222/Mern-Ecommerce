import React from 'react'

import "./style.scss"
import { Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import Rate from '../Rate'

const CardProduct = ({product = {images : [ { url : "" }] }}) => {
  return (
    <Link to={`/products/${product._id}`}>
      <div className='card-product'>
        <div className='div-img'>
            <img src={product.images[0].url} />
        </div>
        <div className='details'>
            <div className='title'>
            <Tooltip title={product.name} color='#222' >
                 <p>{String(product.name).substring(0,40) + "..."}</p>
            </Tooltip>
            </div>
            <div className='end'>
            <div className='price'>
                <span className='cur'>EGP</span>
                <span className='mag'>{product.price}</span>
            </div>
              <Rate />
            </div>
        </div>
    </div>
    </Link>
  )
}

export default CardProduct