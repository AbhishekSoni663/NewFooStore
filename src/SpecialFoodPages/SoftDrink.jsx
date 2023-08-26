import React from "react";
import DrinkContainer from "../SpecialComponent/DrinkContainer";
import SecondNav from "../SecondNavbar/SecondNav";
import HeroSection from "../HeroComponent/HeroSection";
import FoodDemo from "../FoodDemoComponent/FoodDemo";
import Restaurant from "../RestaurantDetail/Restaurant";
import ReviewA from "../RestReview/ReviewA";
import Footer from "../FooterComponent/Footer";

const SoftDrink = () => {
  return (
    <div>
      <HeroSection />
      <FoodDemo />
      <SecondNav />
      <DrinkContainer />
      <Restaurant />
      <ReviewA />
      <Footer />
    </div>
  );
};

export default SoftDrink;
