import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import '../SpecialComponent/SpecialFood.css'
const SecondNav = () => {
  return (
    <div>
      <div className="special-menu-head">
        <span className="special-title">
          <h4>Taste A Little Bit</h4>
          <h2>Our Special Menu</h2>
        </span>
        <div className="special-nav">
          <ul className="special-ul">
            <Button>
              <Link to={"/"}>BreakFast</Link>
            </Button>
            <Button>
              <Link to={"/brunch"}>Brunch</Link>
            </Button>
            <Button>
              <Link to={"/lunch"}>Lunch</Link>
            </Button>
            <Button>
              <Link to={"/dinner"}>Dinner</Link>
            </Button>
            <Button>
              <Link to={"/softdrink"}>Soft Drink</Link>
            </Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SecondNav;
