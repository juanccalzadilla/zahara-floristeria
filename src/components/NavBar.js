import React from 'react'
import './NavBar.css'
export const NavBar = () => {
    return (
        <nav className="container">
            <ul className="nav-bar">
                <li className="nav-link">Inicio</li>
                <li className="nav-link">Productos</li>
                <li className="nav-link">Galeria</li>
                <li className="nav-link">Contacto</li>
            </ul>
        </nav>
    )
}
