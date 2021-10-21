import hero2 from '../assets/hero2.jpg'
import './css/Categoria.css'
import React from 'react'
import { useParams } from 'react-router'
const products = require('../json/products')
export const Categoria = () => {

    const { category } = useParams();

    const data = products.filter(data => data.category === category)
    console.log(data);
    return (
        <>
            <h1 className="text-center bg-warning text p-4">Floristeria Zahara - {category.toUpperCase()}</h1>
            <div className="container-fluid d-flex flex-wrap">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5
            justify-content-center">
                    {data.map(data => (

                        <div className="card-container d-flex txt flex-column m-4" key={data.id} >

                           <div className="my-card">
                               <img className="img-fluid" alt={data.name} src={hero2}></img>
                               <h1 className="name">{data.name}</h1>
                               <p className="price"> €{data.price}</p>
                           </div>

                            {/* <img src={hero2} alt={data.name}  className="img-fluid image" />
                        <div className="info">
                            <h3 className="text-center mt-3">{data.name}</h3>
                            <p>{data.description}</p>
                            <span className="text-center">---------------------&gt;€{data.price}</span>
                            
                        </div> */}
                        </div>


                    ))}
                    <button className="btn btn-danger w-100 mr-3 ">Contacto</button>
                </div>
            </div>
        </>
    )
}
