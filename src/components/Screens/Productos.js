import React from 'react'
import 'animate.css'
import hero2 from '../../assets/hero2.jpg'
const products = require('../../json/products.json')

export const Productos = () => {

    return (
        <>
        <h1 className="text-center bg text p-4">Productos</h1>
        <div className="container-fluid d-flex flex-wrap">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5
            justify-content-center">
                {products.map(data => (
                    
                    <div className="card-container d-flex txt flex-column m-4 animate__animated animate__zoomIn" key={data.id} >
                         <div className="my-card">
                               <img className="img-fluid" alt={data.name} src={hero2}></img>
                               <h1 className="name">{data.name}</h1>
                               <p className="price"> €{data.price}</p>
                           </div>
                    </div>

                ))}
            </div>
        </div>
    </>
    )
}
