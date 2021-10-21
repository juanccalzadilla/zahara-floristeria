import React from 'react'
import { AboutUs } from '../helperComponents/AboutUs'
import { Carousel } from '../helperComponents/Carousel'
import { Hero } from '../helperComponents/Hero'
import { Products } from '../Products'

export const HomeScreen = () => {
    return (
        <div>
            <Hero/>
            <Products/>
            <AboutUs/>
            <Carousel/>
        </div>
    )
}
