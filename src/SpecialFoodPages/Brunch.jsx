import React from 'react'
import BrunchContainer from '../SpecialComponent/BrunchContainer'
import SecondNav from '../SecondNavbar/SecondNav'
import HeroSection from '../HeroComponent/HeroSection'
import FoodDemo from '../FoodDemoComponent/FoodDemo'
import Restaurant from '../RestaurantDetail/Restaurant'
import ReviewA from '../RestReview/ReviewA'
import Footer from '../FooterComponent/Footer'

const Brunch = () => {
  return (
    <div>
      <HeroSection/>
      <FoodDemo/>
      <SecondNav/>
      <BrunchContainer/>
      <Restaurant/>
      <ReviewA/>
      <Footer/>
    </div>
  )
}

export default Brunch
