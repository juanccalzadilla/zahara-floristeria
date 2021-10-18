import React from 'react'
import './Footer.css'
export const Footer = () => {

    const date = new Date().getFullYear();
    return (
        <footer className="bg-danger mt-4 p-4">
            <div className="container">
                <ul className="list">
                    <li>Productos</li>
                    <li>Galeria</li>
                    <li>Contacto</li>
                    <li>Empleo</li>
                </ul>
            </div>
            {<h6 className="text-center text-white ">Made by @JuanCCalzadilla {date}</h6>}
        </footer>
    )
}
