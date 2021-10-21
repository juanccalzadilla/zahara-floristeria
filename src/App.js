import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,Redirect
} from "react-router-dom";
import { Footer } from './components/helperComponents/Footer'

import { NavBar } from './components/helperComponents/NavBar'
import { HomeScreen } from './components/Screens/HomeScreen'
import { Productos } from './components/Screens/Productos'
import { Galeria } from './components/Screens/Galeria'
import { Contacto } from './components/Screens/Contacto'
import { Categoria } from './components/Categoria';
// import { Header } from './components/Header';


export const App = () => {
    return (
        <Router>
            {/* <Header/> */}
            <NavBar />
            <Switch>
                <Route exact path="/" component={HomeScreen}/>
                <Route exact path="/productos" component={Productos}/>
                <Route exact path="/galeria" component={Galeria}/>
                <Route exact path="/contacto" component={Contacto}/>
                <Route  path="/categoria/:category" component={Categoria}/>
                <Redirect to="/"/>
            </Switch>
            <Footer />
        </Router>
    )
}
