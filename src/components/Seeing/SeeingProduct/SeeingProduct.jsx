import React from 'react'
import './seeing-product.scss'
import { NavLink } from 'react-router-dom'

export const SeeingProduct = ({ name, image, id }) => {

    return <NavLink to={`/categories/${id}`} onClick={() => alert('category' + name)}>
        <div className="card" >
            <div className='card__image'>
                <img src={image} alt="category image" />
            </div>

            <h4 className='card__title' >{name}</h4>
        </div>
    </NavLink>

}
