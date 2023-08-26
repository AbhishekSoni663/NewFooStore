import { Grid } from '@mui/material'
import React from 'react'
import DinnerFood from './DinnerFood'
import { useContext } from 'react'
import DinnerContext from '../DinnerContext/DinnerContext'
import { getDinner } from '../DinnerContext/DinnerAction'

const DinnerContainer = () => {
  const {dinner , dispatch} = useContext(DinnerContext)
  const getData = ()=>{
    const data = getDinner()
    dispatch({
      type:"DINNER",
      payload:data
    })
  }
  return (
    <Grid container gap={1.9} alignItems={'center'} justifyContent={'center'}>
      {
        dinner.map((dinner)=><DinnerFood key={dinner.id} dinner={dinner}/>)
      }
    </Grid>
  )
}

export default DinnerContainer
