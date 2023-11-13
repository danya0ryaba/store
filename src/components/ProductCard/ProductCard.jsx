import React from 'react'
import './product-card.scss'
import product from '../../image/product/product.png'

export const ProductCard = () => {
    return <div className="product">
        <div className='product__image'>
            <img src={product} alt="product" />
        </div>

        <h4 className="product__title">Nike ZoomX 2023</h4>
        <h4 className='product__name'>Sneakers</h4>
        <div className="product__info">
            <div className="price">
                <span className="price-new">99$</span>
                <span className="price-old">79$</span>
            </div>
            <span className="sales">19 people purchased</span>
        </div>
    </div>
}
