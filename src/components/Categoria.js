import hero2 from '../assets/hero2.jpg'
import React from 'react'
import { useParams } from 'react-router'
const rosasData = require('../json/rosas')
export const Categoria = () => {

    const { category } = useParams();

    const data = rosasData.filter(data => data.category === category)
    console.log(data);
    return (
        <>
        <h1 className="text-center bg text p-4">Perfect Store - Products</h1>
        <div className="container-fluid d-flex flex-wrap">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5
            justify-content-center">
                {data.map(data => (
                    
                    <div className="card-container d-flex txt flex-column m-4" key={data.id} >
                        <img src={hero2} alt={data.name}  className="img-fluid" />
                        <div className="info">
                            <h3 className="text-center mt-3">{data.name}</h3>
                            <p>{data.description}</p>
                            <span className="text-center">---------------------&gt;€{data.price}</span>
                            <button className="btn btn-danger w-100 mr-3 ">BUY NOW</button>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    </>
    )
}
