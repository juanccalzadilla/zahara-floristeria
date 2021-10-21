import React from 'react'
import { useParams } from 'react-router'
import 'animate.css'
import hero2 from '../assets/hero2.jpg'
import './css/Categoria.css'
const products = require('../json/products')
export const Categoria = () => {

    const { category } = useParams();

    const data = products.filter(data => data.category === category)
    const updateCategoryName = category.charAt(0).toUpperCase() + category.slice(1);
    return (
        <>
            <h1 className="text-center p-4">{updateCategoryName}</h1>
            <div className="container-fluid d-flex flex-wrap">
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5
            justify-content-center">
                    {data.map(data => (

                        <div className="card-container d-flex txt flex-column m-4 animate__animated animate__rollIn" key={data.id} >

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
