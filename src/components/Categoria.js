import React from 'react'
import { useParams } from 'react-router'

export const Categoria = () => {

    const {category} = useParams();
    console.log(category);
    return (
        <div>
            Hello
        </div>
    )
}
