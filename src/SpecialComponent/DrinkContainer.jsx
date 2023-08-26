import { Grid } from '@mui/material'
import React from 'react'
import Drink from './Drink'
import { useContext } from 'react'
import DrinkContext from '../DrinkContext/DrinkContext'
import { getDrink } from '../DrinkContext/DrinkAction'

const DrinkContainer = () => {
  const {drink,dispatch} = useContext(DrinkContext)
  const getData = ()=>{
    const data = getDrink()
    dispatch({
      type:"DRINK",
      payload:data
    })
  }
  return (
    <Grid container gap={1.9} alignItems={'center'} justifyContent={'center'}>
      {
        drink.map((drink)=><Drink key={drink.id} drink={drink} />)
      }
    </Grid>
  )
}

export default DrinkContainer
