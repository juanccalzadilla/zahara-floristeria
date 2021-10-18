import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
export const NavBar = () => {
    return (
        <nav className="container">
            <ul className="nav-bar">
                <Link to="/"className="nav-link">Inicio</Link>
                <Link to="/productos" className="nav-link">Productos</Link>
                <Link to="/galeria" className="nav-link">Galeria</Link>
                <Link to="/contacto" className="nav-link">Contacto</Link>
            </ul>
        </nav>
    )
}
