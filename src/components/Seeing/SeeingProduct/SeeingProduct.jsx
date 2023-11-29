import React from 'react'
import './seeing-product.scss'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { filteredProductsCategory } from '../../../feature/products/productsSlice'

export const SeeingProduct = ({ name, image, id }) => {

    const dispatch = useDispatch()

    const onClickSeeingProduct = () => {
        window.scroll(0, 550)
        dispatch(filteredProductsCategory(id))
    }

    return <NavLink to={`/categories/${id}`} onClick={onClickSeeingProduct}>
        <div className="card" >
            <div className='card__image'>
                <img src={image} alt="category image" />
            </div>
            <h4 className='card__title' >{name}</h4>
        </div>
    </NavLink>

}
