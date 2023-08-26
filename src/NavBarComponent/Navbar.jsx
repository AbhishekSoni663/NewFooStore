import { AppBar, Box, Button, Icon, Toolbar, Typography } from "@mui/material";
import NavLogo from "../assets/Navimg/logo.png";
import NavShop from "../assets/Navimg/purchase.gif";
import "../NavBarComponent/Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../CartContext/CartContext";
import ToogleBar from "../DarkMode/ToogleBar";
const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <AppBar className="navbar" position="static">
      <Toolbar
        className="nav-detail"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <img className="nav-img1" src={NavLogo} height={"90px"} width={"130px"} />
        <Box
          width={"50%"}
          className="nav-head"
          component={"span"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <Typography color={"aliceblue"}>
            <Link to="">Home</Link>
          </Typography>
          <Typography color={"aliceblue"}>
            <Link to="/about">About us</Link>
          </Typography>
          <Typography color={"aliceblue"}>
            <Link to="/contact">Contact</Link>
          </Typography>
        </Box>
        <Box className="box-btn" component={"span"}>
          <Typography color={"aliceblue"}>
            <i className="bi bi-whatsapp"></i>
          </Typography>
          <Button className="btn">
            <Link className="btn-link" to="/cart">
              <img className="nav-btn-logo" src={NavShop} />
            </Link>
            <h4>{cart.length}</h4>
          </Button>
        </Box>
       <ToogleBar/>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
