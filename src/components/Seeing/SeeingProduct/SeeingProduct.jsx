import React from 'react'
import './seeing-product.scss'
import seeing from '../../../image/seeing/pr_seeing.png'

export const SeeingProduct = () => {
    return <div className="card">
        <div className='card__image'>
            <img src={seeing} alt="product" />
        </div>

        <h4 className='card__title'>Sneakers</h4>
    </div>
}
