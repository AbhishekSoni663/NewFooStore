import React, { useEffect } from "react";
import "../FoodDemoComponent/FoodDemo.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Grid, Typography } from "@mui/material";
import { Fade, Zoom } from "react-awesome-reveal";
import whatImg from "../assets/Hero2/whatsapp.png";
import callImg from "../assets/Hero2/phone-call.png";

// import { motion, useTime, useTransform } from "framer-motion";
const FoodDemo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  // const time = useTime();
  // const rotate = useTransform(time, [0,3000],[0,360],{clamp:false});
  return (
    <section className="demo-main">
      <span className="demo-title">
        <h1>Meet Our Delicious Dishes</h1>
      </span>
      <section className="demo-detail">
        <div className="demo-img">
          <div className="demo-img1">
            <div className="img" data-aos="flip-right"></div>
            <div className="img2" data-aos="flip-left"></div>
          </div>
          <div className="demo-img2">
            <span className="img3" data-aos="flip-right"></span>
            <span className="img4" v data-aos="flip-left"></span>
          </div>
        </div>
        <div className="demo-head">
          <div className="demo-head-detail">
            <span className="demo-h1">
              <h1>
                Fresh <span style={{ color: "white" }}>& </span>Tasty Food
              </h1>
              <p className="de-h1-p">
                A Sophisticated & Traditional
                <br /> Cuisine
              </p>
            </span>
            <span className="demo-h2">
              <p className="de-p">
                Our Restaurants is One Of The Most Popular Restaurant with
                Unique & Special menu by our passionate chefs with love and
                quality with can impress you
              </p>

              <br />
              <span>
                <p className="p1">
                  If Any Querry{" "}
                  <a href="tel:">
                    <img
                      src={callImg}
                      height={"25px"}
                      style={{ marginLeft: "15px" }}
                    />
                  </a>
                </p>
                <p className="p2">
                  {" "}
                  You Can Get Information on Whatsapp{" "}
                  <a href="whatsapp://send?phone=+91 7869407389@s.whatsapp.com&message='I Would Like to Chat With You'">
                    <img
                      src={whatImg}
                      height={"25px"}
                      style={{ marginLeft: "15px" }}
                    />
                  </a>
                </p>
              </span>
            </span>
            <span className="demo-link">
              <a link href="#">
                View Full Menu
              </a>
            </span>
          </div>
        </div>
      </section>
      <Grid
        container
        justifyContent={"center"}
        padding={"10px"}
        className="demo-card-main"
        gap={2}
      >
        <Grid
          item
          sm={12}
          xs={6}
          md={5}
          className="demo-card"
          data-aos="zoom-in"
        >
          <Typography
            data-aos="zoom-in"
            className="demo-card-h1"
            variant="h5"
            style={{ float: "right" }}
          >
            Double The Fun On Every Lunch Time <br />
            <Typography className="demo-card-ha" marginTop="5px">
              <Button data-aos="flip-right" className="demo-card-btn">
                Buy 1
              </Button>
              <Button className="demo-card-btn1">Get 1 Free</Button>
            </Typography>{" "}
          </Typography>
        </Grid>
        <Grid
          data-aos="zoom-in"
          item
          sm={12}
          xs={6}
          md={5}
          className="demo-card1"
        >
          <Typography
            className="demo-card-h2"
            variant="body"
            fontSize={"18px"}
            textAlign={"center"}
          >
            Today Special
            <Typography
              className="demo-card-h3"
              sx={{ marginTop: "2px", fontSize: "24px" }}
            >
              Delicious Food
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default FoodDemo;
