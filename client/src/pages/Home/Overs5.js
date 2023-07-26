import { Container } from '@mui/material'
import React from 'react'



const list = [
    {
        image : "https://f.nooncdn.com/mpcms/EN0003/assets/b1a71624-ae23-4c04-8451-7e8821e1986c.png?format=avifundefined"
    },
    {
        image : "https://f.nooncdn.com/mpcms/EN0003/assets/86946902-8543-47cf-a448-dbae5df745fd.png?format=avifundefined"
    },
    {
        image : "https://f.nooncdn.com/mpcms/EN0003/assets/56af62c0-e554-4e49-b649-a08f77d2399f.png?format=avifundefined"
    },
    {
        image : "https://f.nooncdn.com/mpcms/EN0003/assets/76ec7ded-6e35-45f3-b611-d85755a557f2.png?format=avifundefined"
    }
]

const Card = ({image}) => (
    <div className='card'>
         <img src={image} />
    </div>
)

const Overs5 = () => {
  return (
    <div className='overs1 overs2  container-app'>
        <div className='container'>
         <div className='image'>
             <img src='https://f.nooncdn.com/mpcms/EN0003/assets/741a6286-34f5-41cf-b6b5-fc5736ece13e.png?format=avifundefined' />
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

export default Overs5