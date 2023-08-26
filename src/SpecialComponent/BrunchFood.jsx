import React from 'react'
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import "../SpecialComponent/Brunch.css";
import { Link } from "react-router-dom";
import CartContext from '../CartContext/CartContext';
import { useContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Fade } from 'react-awesome-reveal';


const BrunchFood = ({brunche}) => {
  const {id,name,img,price,rate} = brunche
  const {dispatch}=useContext(CartContext)
  const [newitem,setItem] = useState({brunche,id:crypto.randomUUID(1),name,img,price,rate})
const handleAdd = (newItem)=>{
  setItem({
    ...brunche
  })
  if(brunche.id === newitem.id){
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
          <Fade delay={1e3} cascade damping={1e-1}>
          <Card className="special-card">
            <CardMedia className="special-card-img" sx={{ width: "100px" }}>
              <img src={img} />
            </CardMedia>
            <CardContent>
              <Typography>{rate}</Typography>
              <Typography>{name}</Typography>
              <Typography>{price}</Typography>
            </CardContent>
            <Button onClick={()=>handleAdd(newitem)}>Buy Now</Button>
          </Card>
          </Fade>
        </Grid>
    </>
  )
}

export default BrunchFood
