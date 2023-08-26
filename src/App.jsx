import Navbar from "./NavBarComponent/Navbar";
import SpecialFood from "./SpecialComponent/SpecialFood";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Brunch from "./SpecialFoodPages/Brunch";

import Lunch from "./SpecialFoodPages/Lunch";
import Dinner from "./SpecialFoodPages/Dinner";
import SoftDrink from "./SpecialFoodPages/SoftDrink";
import Restaurant from "./RestaurantDetail/Restaurant";

import { SpecialProvider } from "./SpecialContext/SpecialContext";
import BreakFast from "./SpecialFoodPages/BreakFast";
import { CartProvider } from "./CartContext/CartContext";
import CartPage from "./CartPages/CartPage";
import Home from "./MainPages/Home";
import { BrunchProvider } from "./BrunchContext/BrunchContext";
import { LunchProvider } from "./LunchContext/LunchContext";
import { DinnerProvider } from "./DinnerContext/DinnerContext";
import { DrinkProvider } from "./DrinkContext/DrinkContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutPage from "./AboutPages/AboutPage";
import ContactPage from "./ContactPage/ContactPage";

const App = () => {
  return (
    <>
      <SpecialProvider>
        <CartProvider>
          <BrunchProvider>
            <LunchProvider>
              <DinnerProvider>
                <DrinkProvider>
                  <Router>
                    <Navbar />
                    {/* <HeroSection/> */}
                    {/* <FoodDemo/> */}
                    <Routes>
                      <Route path="" element={<Home />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/" element={<BreakFast />} />
                      <Route path="/cart" element={<CartPage />} />
                      <Route path="/brunch" element={<Brunch />} />
                      <Route path="/lunch" element={<Lunch />} />
                      <Route path="/dinner" element={<Dinner />} />
                      <Route path="/softdrink" element={<SoftDrink />} />
                    </Routes>
                    {/* <Restaurant/> */}
                    {/* <Review/> */}
                    {/* <ReviewA/> */}
                    {/* <Footer/> */}
                  </Router>
                </DrinkProvider>
              </DinnerProvider>
            </LunchProvider>
          </BrunchProvider>
        </CartProvider>
      </SpecialProvider>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
