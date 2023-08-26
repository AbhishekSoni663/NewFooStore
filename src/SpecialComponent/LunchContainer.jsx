import { Grid } from '@mui/material'
import React from 'react'
import LunchFood from './LunchFood'
import { useContext } from 'react'
import LunchContext from '../LunchContext/LunchContext'
import { getLunch } from '../LunchContext/LunchAction'

const LunchContainer = () => {
  const {lunch,dispatch} = useContext(LunchContext)
  const getData = ()=>{
    const data = getLunch()
    dispatch({
      type:"LUNCH",
      payload:data
    })
  }
  return (
    <Grid container gap={1.9} alignItems={'center'} justifyContent={'center'}>
      {
        lunch.map((lunch)=><LunchFood key={lunch.id} lunch={lunch}/>)
      }
    </Grid>
  )
}

export default LunchContainer
