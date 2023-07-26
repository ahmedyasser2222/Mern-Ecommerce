import { Container } from '@mui/material'
import React from 'react'



const list = [
    {
        image : "https://f.nooncdn.com/mpcms/EN0003/assets/26302c28-b36e-4d0c-aa2f-7a4c41e2da59.png?format=avifundefined"
    },
    {
        image : "https://f.nooncdn.com/mpcms/EN0003/assets/a99a2c8e-a7bf-4703-b7d6-11efc1392853.png?format=avifundefined"
    },
    {
        image : "https://f.nooncdn.com/mpcms/EN0003/assets/fd33bcb4-0f61-4453-842c-665ca9d589da.png?format=avifundefined"
    },
    {
        image : "https://f.nooncdn.com/mpcms/EN0003/assets/bf1d48c4-e23d-4997-ab07-09c2b6388617.png?format=avifundefined"
    }
]

const Card = ({image}) => (
    <div className='card'>
         <img src={image} />
    </div>
)

const Overs2 = () => {
  return (
    <div className='overs1 overs2 container-app'>
        <div className='container'>
         <div className='image'>
             <img src='https://f.nooncdn.com/mpcms/EN0003/assets/7eaaee53-9027-43c3-bf44-95cb176f878f.png?format=avifundefined' />
         </div>
         <div className='cards '>
            {
                list.map( (item,index) => (
                    <Card image={item.image} key={index}/>
                ) )
            }
            
         </div>
        </div>
    </div>
  )
}

export default Overs2