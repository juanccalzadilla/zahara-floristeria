import React from 'react'
import hero from '../assets/hero.jpg'
import './hero.css'
export const Hero = () => {
    return (
        <div>
            <img src={hero} className="img-fluid " alt="hello"  ></img>
        </div>
    )
}
