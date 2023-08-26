import React from 'react'
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import "../SpecialComponent/Drink.css";
import { Link } from "react-router-dom";
import { useContext } from 'react';
import CartContext from '../CartContext/CartContext';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Fade } from 'react-awesome-reveal';

const Drink = ({drink}) => {
  const {dispatch} = useContext(CartContext)
  const {id,name,img,rate,price}=drink
  const [newitem,setItem] = useState({drink,id:crypto.randomUUID(1),name,img,price,rate})
  const handleAdd = (newItem)=>{
   setItem({
     ...drink
   })
   if(drink.id === newitem.id){
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
          <Fade delay={1e3} cascade damping={1e-1}>
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


  )
}

export default Drink
