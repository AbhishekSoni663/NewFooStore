import React from "react";
import LunchContainer from "../SpecialComponent/LunchContainer";
import SecondNav from "../SecondNavbar/SecondNav";
import HeroSection from "../HeroComponent/HeroSection";
import FoodDemo from "../FoodDemoComponent/FoodDemo";
import Restaurant from "../RestaurantDetail/Restaurant";
import ReviewA from "../RestReview/ReviewA";
import Footer from "../FooterComponent/Footer";
const Lunch = () => {
  return (
    <div>
      <HeroSection />
      <FoodDemo />
      <SecondNav />
      <LunchContainer />
      <Restaurant />
      <ReviewA />
      <Footer />
    </div>
  );
};

export default Lunch;
