import React from 'react'
import './seeing-product.scss'

export const SeeingProduct = ({ name, image }) => {

    return <div className="card">
        <div className='card__image'>
            <img src={image} alt="product" />
        </div>

        <h4 className='card__title'>{name}</h4>
    </div>
}
