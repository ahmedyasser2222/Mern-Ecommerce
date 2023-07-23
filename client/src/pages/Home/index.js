import React from 'react'
import Slider from './Slider'
import ProductPosted from './ProductPosted'
import Categories from './Categories'
import Overs1 from './Overs1'
import Overs2 from './Overs2'
import Overs3 from './Overs3'
import Overs4 from './Overs4'
import Overs5 from './Overs5'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
         <Slider />
         <ProductPosted />
         <Categories />
         <Overs1 />
         <Overs2 />
         <Overs3 />
         <Overs4 />
         <Overs5 />
         <Footer />
    </div>
  )
}

export default Home