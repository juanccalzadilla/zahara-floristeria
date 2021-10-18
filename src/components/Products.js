import React from 'react'
import { Link } from 'react-router-dom'

export const Products = () => {
    return (
        <div className="container">
            <h1>Aqui podrás encontrar...</h1>
            <div className="row mx-auto w-100">
                <Link to='/categoria/rosas' className="col-md-4 mx-auto btn">
                    <img src="https://tinyurl.com/roses00001" className="img-fluid" width="400" height="400" alt=""></img>
                    <h2 className="text-center">Ramo de Rosas</h2>

                </Link>
                <Link to='/categoria/flores' className="col-md-4 btn">
                    <img src="https://tinyurl.com/bouqets102" className="img-fluid" width="400" height="400" alt=""></img>
                    <h2 className="text-center">Ramo de flores</h2>


                </Link>
                <Link to='/categoria/plantas'className="col-md-4 btn">
                    <img src="https://tinyurl.com/0004flor" className="img-fluid" width="400" height="400" alt=""></img>
                    <h2 className="text-center">Plantas</h2>
                </Link>
            </div>

            <Link to="/productos" className="btn btn-outline-danger w-100 mt-3 mb-3">Ver Mas</Link>
        </div>
    )
}
