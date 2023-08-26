import React from 'react'
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  imageListItemBarClasses,
} from "@mui/material";
import "../SpecialComponent/Lunch.css";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import CartContext from '../CartContext/CartContext';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Fade } from 'react-awesome-reveal';

const LunchFood = ({lunch}) => {
  const {id,name,img,price,rate} = lunch
  const {dispatch} = useContext(CartContext)
  const [newitem,setItem] = useState({lunch,id:crypto.randomUUID(1),name,img,price,rate})
  
  const handleAdd = (newItem)=>{
   setItem({
     ...lunch
   })
   if(lunch.id === newitem.id){
    toast.success('Already Selected Please Increase Quantity')
   }else{
     dispatch({
       type:"ADD_CART",
       payload:newitem
     })
   }
  }

  return (
    <>
        <Grid className=" special-card-sect"
          item
          sm={12}
          xs={6}
          md={3}
        >
          <Fade delay={1e3} cascade damping={1e-1} >
          <Card className="special-card">
            <CardMedia className="special-card-img" sx={{ width: "100px" }}>
            <img src={img} />
            </CardMedia>
            <CardContent>
              <Typography>{name}</Typography>
              <Typography>{rate}</Typography>
              <Typography>{price}</Typography>
            </CardContent>
            <Button onClick={()=>handleAdd(newitem)}>Buy Now</Button>
          </Card>
          </Fade>
        </Grid>
    </>
  )
}

export default LunchFood
