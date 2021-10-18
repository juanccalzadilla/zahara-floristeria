import React from 'react'
import { AboutUs } from '../AboutUs'
import { Carousel } from '../Carousel'
import { Hero } from '../Hero'
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
