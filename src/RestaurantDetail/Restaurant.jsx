import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CardImg from "../assets/Hero2/card1.png"
import '../RestaurantDetail/Restaurant.css'
import { Fade, JackInTheBox, Slide } from 'react-awesome-reveal'
const Restaurant = () => {
    return (
        <>
            <Grid className='rest-main' container gap={0.6} justifyContent={'center'}>
                <Grid item className='rest-card-img'  xs={6} sm={12} md={5}>
                    <JackInTheBox direction='center'  delay={1e3} cascade damping={1e-1}>
                    <Box sx={{ backgroundPosition: 'center', backgroundSize: 'cover', display: 'flex', justifyContent: 'center' }}><img src={CardImg} width={'100%'}/></Box>
                    </JackInTheBox>
                </Grid>
                <Grid className='restaurant-card' item md={5} xs={6} sm={12} style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }} gap={2}>
                    <Fade delay={1e3} cascade damping={1e-1}>
                    <Box className='restaurant-box'>
                        <Typography style={{fontSize:'20px'}}>Quality & Balance</Typography>
                        <Typography style={{fontSize:'20px'}}>An Extraordinary Experinece For All</Typography>
                    </Box>
                    <Box className='restaurant-box1' sx={{ display: 'flex', justifyContent: 'space-around'}} >
                        <Grid className='restaurant-box3'item md={5} style={{  display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }} >
                            <Typography style={{ fontSize: '16px' }}>Passionate Chef</Typography>
                            <Typography style={{ fontSize: '12px' }}>Our Restaurant is One of the Most popular Restaurant & Special menu made by our passionate Chef</Typography>
                        </Grid>
                        <Grid className='restaurant-box4' item md={5} style={{  display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
                            <Typography style={{ fontSize: '16px' }}>100% Fresh Food</Typography>
                            <Typography style={{ fontSize: '12px' }}>Our Restaurant is One of the Most popular Restaurant & Special menu made by our passionate Chef</Typography>
                        </Grid>
                    </Box>
                    <Box className='restaurant-box2' sx={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Grid className='restaurant-box3' item md={5} >
                            <Typography  style={{ fontSize: '16px' }}>Memorable Ambience</Typography>
                            <Typography style={{ fontSize: '12px' }}>Our Restaurant is One of the Most popular Restaurant & Special menu made by our passionate Chef</Typography>
                        </Grid>
                        <Grid className='restaurant-box4' item md={5} >
                            <Typography style={{ fontSize: '16px' }}>Special Dish of Occasion</Typography>
                            <Typography style={{ fontSize: '12px' }}>Our Restaurant is One of the Most popular Restaurant & Special menu made by our passionate Chef</Typography>
                        </Grid>
                    </Box>
                    </Fade>
                </Grid>
                <Grid item className='restaurant-card1' md={5} xs={6} sm={12} style={{  display: 'flex', justifyContent: 'space-evenly', flexDirection: 'column' }} order={{sm:1, xs:2}}>
                    <Fade direction='center' delay={1e3} cascade damping={1e-1}>
                    <Box className='rest-card-box' sx={{direction:'rtl'}}>
                        <Typography style={{ display:'flex' ,justifyContent:'center',width:'100%' }}>EVENT BOOKING</Typography>
                        <Typography className='rest-typs' style={{ fontSize: '30px', width: '100%',alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column' }}>Do you have any plan <br/><span style={{fontSize:'27px'}}> for any Paarty or Events</span></Typography>
                    </Box>
                    {/* <Box sx={{ display: 'flex', justifyContent: 'space-around' }} >
                        
                    </Box> */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column', alignItems: 'center' }}>
                        <Grid item md={5} xs={6} sm={12} style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column',marginBottom:'5px'}}>
                            <Typography className='rest-card-typ' style={{ fontSize: '17px' }}>Call For Reservation</Typography>
                        </Grid>
                        <Grid className='rest-card1' item md={8}  xs={6} sm={12} >
                            <Typography className='rest-card-box0' style={{ fontSize: '15px', marginLeft: '9px' }}>Opening Hours</Typography>
                            <Box className='rest-card-box' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 10px' }}>
                                <Typography style={{ fontSize: '12px' }}>Monday-Saturday </Typography>
                                <Typography style={{ fontSize: '12px' }} >7:30 am - 11:30 pm</Typography>
                            </Box>
                            <Box className='rest-card-box1' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 10px' }}>
                                <Typography style={{ fontSize: '12px' }}>Sunday</Typography>
                                <Typography style={{ fontSize: '12px' }} >7:30 am - 11:30 pm</Typography>
                            </Box>
                            <Box className='rest-card-box2' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 10px' }}>
                                <Typography style={{ fontSize: '12px' }}>Happy Hour</Typography>
                                <Typography style={{ fontSize: '12px' }} >5:30 pm - 9:30 pm</Typography>
                            </Box>
                        </Grid>
                        {/* <Grid item md={5} style={{ backgroundColor: 'antiquewhite' }}>
                            <Typography style={{ fontSize: '14px' }}>100% Fresh Food</Typography>
                            <Typography style={{ fontSize: '12px' }}>Our Restaurant is One of the Most popular Restaurant & Special menu made by our passionate Chef</Typography>
                        </Grid> */}
                    </Box>
                    </Fade>
                </Grid>
                <Grid className='rest-card-img1' item  xs={6} sm={12} md={5} order={{sm:2,xs:1}} >
                    <JackInTheBox delay={1e3} cascade damping={1e-1}>
                    <Box sx={{ backgroundPosition: 'center', backgroundSize: 'cover', display: 'flex', justifyContent: 'center',width:'100%' }}><img src={CardImg} width={'100%'}/></Box>
                    </JackInTheBox>
                </Grid>
            </Grid>
        </>
    )
}

export default Restaurant
