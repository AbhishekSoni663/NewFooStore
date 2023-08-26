import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import Typewriter from "typewriter-effect";
import '../HeroComponent/Hero.css'
import HeroBg from '../assets/HeroImg/heroimg.png'
import { Fade } from 'react-awesome-reveal';
import { Cursor } from 'react-simple-typewriter';
const HeroSection = () => {
    return (
        <>
            <Grid className='hero-bg' container alignItems={'center'} justifyContent={'center'} gap={3}>
                <Grid item className='hero-head' xs={12} sm={9} md={5} padding={'10px'}>
                    <Typography className='hero-typ' color={'white'} variant='h3'> We Combined</Typography>
                    <Typography className='hero-typ1' color={'white'} variant='h4'><strong><span style={{color:'red'}}>Healthy </span></strong> and <span style={{color:'red'}}>The</span></Typography>
                    <Typography className='hero-typ2' color={'white'} variant='h4'><Typewriter options={{
                        autoStart: true,
                        delay: 300,
                        loop: true,
                        cursor: '_'
                    }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Delecious Food")
                                .pauseFor(1200)
                                .deleteAll(150)
                                .start();
                        }} /></Typography>

                    <Typography className='hero-typ3'>Our restaurant serve high quality food of all kinds with fast delivery service,all at great prices check out our menu.</Typography>

                    <Box className='scene'>
                        <Button className='cube'>
                            <Typography className='side top'>Look Menu</Typography>
                            <Typography className='side front'>Welcome</Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid className='hero-bg-m' item md={5} xs={12} sm={12}>
                    <Box className='hero-bg-m2'><Fade delay={1e3} cascade damping={1e-1}><img className='hero-m-img' src={HeroBg} /></Fade></Box>
                </Grid>
            </Grid>
        </>
    )
}

export default HeroSection
