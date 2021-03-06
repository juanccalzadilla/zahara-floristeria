import React from 'react'
import 'animate.css'
import { Link } from 'react-router-dom'
import './css/Products.css'
export const Products = () => {
    return (
        <div className="container">
            <h1>Aqui podrás encontrar..</h1>
            <div className="row mx-auto w-100">
                <Link to='/categoria/rosas' className="col-md-4 mx-auto btn lkn">
                    <img src="https://tinyurl.com/roses00001" className="img-fluid imgh animate__animated animate__fadeIn " width="400" height="400" alt=""></img>
                    <h2 className="text-center txtd">Ramo de Rosas</h2>

                </Link>
                <Link to='/categoria/flores' className="col-md-4 btn lkn">
                    <img src="https://tinyurl.com/bouqets102" className="img-fluid imgh animate__animated animate__fadeIn " width="400" height="400" alt=""></img>
                    <h2 className="text-center txtd">Ramo de flores</h2>


                </Link>
                <Link to='/categoria/plantas' className="col-md-4 btn lkn">
                    <img src="https://tinyurl.com/0004flor" className="img-fluid imgh animate__animated animate__fadeIn" width="400" height="400" alt=""></img>
                    <h2 className="text-center txtd">Plantas</h2>
                </Link>
            </div>

            <Link to="/productos" className="btn btn-outline-danger w-100 mt-3 mb-3">Ver Mas</Link>
        </div>
    )
}
