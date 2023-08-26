import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import '../SpecialComponent/SpecialFood.css'
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Aos from "aos";
import { useContext } from "react";
import CartContext from "../CartContext/CartContext";
import { toast } from "react-toastify";

const SpecialFood = ({specialfood}) => {

  const {id,name,img,price,rate}=specialfood
  const {dispatch} = useContext(CartContext)
  const [newitem,setItem] = useState({specialfood,id:crypto.randomUUID(1),name,img,price,rate})

  const handleAdd = (newitem)=>{
    setItem({
      ...specialfood
    })
    if(specialfood.id === newitem.id){
      toast.success('Already Selected Please Increase Quantity')
    }else{
      dispatch({
        type:"ADD_CART",
        payload:newitem
      })
    }
  }
  return (    
        <Grid className=" special-card-sect"
          item
          sm={12}
          xs={6}
          md={3}
        >
          <Card className="special-card" data-aos="zoom-in">
            <CardMedia className="special-card-img">
              <img src={img} />
            </CardMedia>
            <CardContent>
              <Typography className="card-data">{name}</Typography>
              <Typography className="card-data1">{rate}</Typography>
              <Typography className="card-data2">Rs : {price}</Typography>
            </CardContent>
            <Button onClick={()=>handleAdd(newitem)} className="special-btn">Buy Now</Button>
          </Card>
        </Grid>
  );
};

export default SpecialFood;
