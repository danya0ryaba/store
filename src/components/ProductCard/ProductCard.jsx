import React from 'react'
import './product-card.scss'


export const ProductCard = (p) => {

    return <div className="product">
        <div className='product__image'>
            <img src={p.images[0]} alt="product" />
        </div>
        <h4 className="product__title">{p.title}</h4>
        <h4 className='product__name'>{p.category.name}</h4>
        <div className="product__info">
            <div className="price">
                <span className="price-new">{p.price}$</span>
                <span className="price-old">79$</span>
            </div>
            <span className="sales">19 people purchased</span>
        </div>
    </div>
}
