import React from "react";
import SpecialFoodContainer from "../SpecialComponent/SpecialFoodContainer";
import SecondNav from "../SecondNavbar/SecondNav";
import HeroSection from '../HeroComponent/HeroSection'
import FoodDemo from '../FoodDemoComponent/FoodDemo'
import Restaurant from '../RestaurantDetail/Restaurant'
import ReviewA from '../RestReview/ReviewA'
import Footer from '../FooterComponent/Footer'
const BreakFast = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <FoodDemo />
      <SecondNav />
      <div className="bre-cont">
        <SpecialFoodContainer />
        <Restaurant />
        <ReviewA />
        <Footer />
      </div>
    </>
  );
};

export default BreakFast;
