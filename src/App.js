import React from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/header'
import { NavBar } from './components/NavBar'
import { HomeScreen } from './components/Screens/HomeScreen'

export const App = () => {
    return (
        <div>
             <Header/>
             <hr/>
             <NavBar/>

             <HomeScreen/>



             <Footer/>
        </div>
    )
}
