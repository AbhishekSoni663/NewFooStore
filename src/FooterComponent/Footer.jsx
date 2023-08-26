import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../FooterComponent/Footer.css";
import { Fade } from "react-awesome-reveal";
import FootLogoA from "../assets/FooterImg/logo.png";

const Footer = () => {
  return (
    <>
      <Fade delay={1e3} cascade damping={1e-1}>
        <Grid container className="footer-main">
          <Grid
            className="foot-box"
            item
            md={3}
            xs={6}
            sm={12}
            order={{ sm: 1, xs: 2 }}
          >
            <Box className="foot-box1">
              <Fade delay={1e3} cascade damping={1e-1}>
                <img className="img1" src={FootLogoA} />
              </Fade>
              <Typography className="foot-typ">
                Our Restaurant is one of the most poular restaurant & Special
                menu ade by our passionate chefs
              </Typography>
              <Box className="foot-box-1">
                <Fade delay={1e3} cascade damping={1e-1}>
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/facebook-new.png"
                    alt="facebook-new"
                  />
                </Fade>
                <Fade delay={1e3} cascade damping={1e-1}>
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/linkedin.png"
                    alt="linkedin"
                  />
                </Fade>
                <Fade delay={1e3} cascade damping={1e-1}>
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/github--v1.png"
                    alt="github--v1"
                  />
                </Fade>
                <Fade delay={1e3} cascade damping={1e-1}>
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/whatsapp--v1.png"
                    alt="whatsapp--v1"
                  />
                </Fade>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            md={9}
            xs={6}
            sm={12}
            className="foot-box2"
            order={{ sm: 2, xs: 1 }}
          >
            <Box className="foot-box-2">
              <Typography className="foot-typ1">Restaurant</Typography>
              <Link>About Us</Link>
              <Link>Our Menu</Link>
              <Link>Book a Table</Link>
              <Link>Blog Post</Link>
              <Link>Contact</Link>
            </Box>
            <Box className="foot-box-2">
              <Typography className="foot-typ1">Information</Typography>
              <Link>Term & Condition</Link>
              <Link>24/7 Service</Link>
              <Link>Style Guide</Link>
              <Link>Licenses</Link>
              <Link>Change Log</Link>
            </Box>
            <Box className="foot-box-2">
              <Typography className="foot-typ1">Contact Info</Typography>
              <Typography className="foot-typ">
                20 Padam Mohan Colony Station Road Dewas
              </Typography>
              <Link>abhishek.as663@gmail.com</Link>
              <Link>+91 7869407389</Link>
            </Box>
          </Grid>
        </Grid>
      </Fade>
    </>
  );
};

export default Footer;
