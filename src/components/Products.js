import React from 'react'

export const Products = () => {
    return (
        <div className="container">
        <h1>Aqui podrás encontrar...</h1>
        <div className="row mx-auto w-100">
            <div className="col-md-auto mx-auto">
            <img src="https://tinyurl.com/roses00001" className="img-fluid" width="400" height="400" alt=""></img>
            <h2 className="text-center">Ramo de Rosas</h2>
            
            </div>
            <div className="col-md-auto">
            <img src="https://tinyurl.com/bouqets102" className="img-fluid" width="400" height="400" alt=""></img>
            <h2 className="text-center">Ramo de flores</h2>

            
            </div>
            <div className="col-md-auto">
            <img src="https://tinyurl.com/0004flor" className="img-fluid" width="400" height="400" alt=""></img>
            <h2 className="text-center">Plantas</h2>
            </div>
        </div>

        <button className="btn btn-outline-danger w-100 mt-3 mb-3">Ver Mas</button>
        </div>
    )
}