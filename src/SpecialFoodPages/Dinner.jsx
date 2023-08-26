import React from "react";
import DinnerContainer from "../SpecialComponent/DinnerContainer";
import SecondNav from "../SecondNavbar/SecondNav";
import HeroSection from "../HeroComponent/HeroSection";
import FoodDemo from "../FoodDemoComponent/FoodDemo";
import Restaurant from "../RestaurantDetail/Restaurant";
import ReviewA from "../RestReview/ReviewA";
import Footer from "../FooterComponent/Footer";

const Dinner = () => {
  return (
    <div>
      <HeroSection />
      <FoodDemo />
      <SecondNav />
      <DinnerContainer />
      <Restaurant />
      <ReviewA />
      <Footer />
    </div>
  );
};

export default Dinner;
