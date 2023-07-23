import { Container } from '@mui/material'
import React from 'react'



const list = [
    {
        image : "https://f.nooncdn.com/mpcms/EN0003/assets/b17d38b9-55d1-402d-b1fe-1eaf5819d5d7.png?format=avifundefined"
    },
    {
        image : "https://f.nooncdn.com/mpcms/EN0003/assets/76be9e77-bd0e-4313-89e1-52eb655bf4b0.png?format=avifundefined"
    },
    {
        image : "https://f.nooncdn.com/mpcms/EN0003/assets/0a8e0d54-4e84-4486-9b6e-f33c4aab1b70.png?format=avifundefined"
    },
    {
        image : "https://f.nooncdn.com/mpcms/EN0003/assets/6b3bd767-3747-4370-84da-3c62e0009006.png?format=avifundefined"
    },
    {
        image : "https://f.nooncdn.com/mpcms/EN0003/assets/6ce890a1-c5df-4824-8721-0ba4eeee53fa.png?format=avifundefined"
    }
]

const Card = ({image}) => (
    <div className='card'>
         <img src={image} />
    </div>
)

const Overs4 = () => {
  return (
    <div className='overs1 overs2 overs4 container-app'>
        <div className='container'>
         <div className='image'>
             <img src='https://f.nooncdn.com/mpcms/EN0003/assets/975da6a0-5a08-447c-9c84-b11985af1641.png?format=avifundefined' />
         </div>
         <div className='cards '>
            {
                list.map( item => (
                    <Card image={item.image}/>
                ) )
            }
            
         </div>
        </div>
    </div>
  )
}

export default Overs4