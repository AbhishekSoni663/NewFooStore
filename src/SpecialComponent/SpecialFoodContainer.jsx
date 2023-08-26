import React, { useContext, useEffect } from 'react'
import SpecialContext from '../SpecialContext/SpecialContext'
import '../SpecialComponent/SpecialFood.css'
import { getSpecial } from '../SpecialContext/SpecialAction'

import SpecialFood from './SpecialFood'
import { Grid } from '@mui/material'
const SpecialFoodContainer = () => {
    const {specialfoods,dispatch} = useContext(SpecialContext)

    const getData = () => {
        const data = getSpecial()
        dispatch({
            type:"SPECIALFOOD",
            payload:data
        })
    }

    // useEffect(()=>{
        // getData()
    // },[])
  return (
    <Grid container gap={1.9} alignItems={'center'} justifyContent={'center'}>
      {
        specialfoods.map((specialfood) =><SpecialFood key={specialfood.id} specialfood={specialfood}/> )
      }
    </Grid>
  )
}

export default SpecialFoodContainer
