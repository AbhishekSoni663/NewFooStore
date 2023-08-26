import React from 'react'
import HeroSection from '../HeroComponent/HeroSection'
import FoodDemo from '../FoodDemoComponent/FoodDemo'
import Restaurant from '../RestaurantDetail/Restaurant'

import BreakFast from '../SpecialFoodPages/BreakFast'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      {/* <FoodDemo/> */}
      <BreakFast/>    
    </div>
  )
}

export default Home
