import React from 'react'
import './AboutUs.css'
export const AboutUs = () => {
    return (
        <div className="d-flex clf">
            <div className="img">
                <img src="https://tinyurl.com/aboutusjs" className="img-fluid" width="900" height="500" alt=""></img>
            </div>
            <div className="bg-danger text-white p-4 desc">
                <h1>Sobre nosotros</h1>
                <p>Floristeria en Alcobendas y San Sebastián de los Reyes, y toda la zona norte, La Moraleja, Las Tablas, San Chinarro, Fuencarral, Tanatorio La Paz, Tanatorio Tres Cantos, Hospital Infanta Sofía, Hospital Sanitas La Moraleja. Envíos a domicilio sin recargo.</p>
            </div>
        </div>
    )
}
