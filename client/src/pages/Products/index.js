import React, { useEffect, useState } from 'react'
import "./style.scss";
import Filter from './Filter';
import CardsProducts from './CardsProducts';
import axios from "axios"
import { URL } from "../../API"
import CircularProgressLoading from '../../components/CircularProgressLoading';
import Drawer from "../../components/layout/Header/Drawer"

const Products = () => {
  const [data,setData] = useState({})
  const [loading , setLoading] = useState(false)

  useEffect(()=>{
    async function getData(){
       try{
         setLoading(true)
         const res = await axios.get(`${URL}/api/v1/products`)
         setLoading(false)
         setData(res.data)
       }catch(err){
        setLoading(false)
       }
    }
    getData()

    },[])

  return (
    <div className='container-app'>
         <div className="container">
             <div className='products'>
            {/*  <Drawer open={true} setOpen={()=>{}} logout={()=>{}} /> */}

                 <Filter />
                 <CardsProducts products={data.products} productsCount={data.productsCount} />
             </div>
         </div>
         <CircularProgressLoading loading={loading} />
    </div>
  )
}

export default Products