
import BrunchFood from './BrunchFood'
import { Grid } from '@mui/material'

import BrunchContext from '../BrunchContext/BrunchContext'
import { getBrunch } from '../BrunchContext/BrunchAction'
import { useContext } from 'react'

const BrunchContainer = () => {
 const {brunches,dispatch} = useContext(BrunchContext)
 
  const getData = ()=>{
    const data = getBrunch()
    dispatch({
      type:"BRUNCH",
      payload:data
    })
  }
  return (
    <Grid container gap={1.9} alignItems={'center'} justifyContent={'center'}>
     {
      brunches.map((brunche)=> <BrunchFood key={brunche.id} brunche={brunche}/>)
     }
    </Grid>
  )
}

export default BrunchContainer
