import React from 'react'
import './categories.scss'
import { NavLink, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../feature/categories/categoriesSlice'
import { getProducts } from '../../feature/products/productsSlice'

export const Categories = () => {

    const dispatch = useDispatch()

    const { list, isLoading } = useSelector(state => state.categories)

    React.useEffect(() => {
        dispatch(getCategories())
    }, [])

    return <div className='categories'>
        <h2>CATEGORIES</h2>
        {!isLoading && <h4>Loading ...</h4>}
        <ul className='menu'>
            {list.map(item => (
                <li key={item.id} className='menu__item'>
                    <NavLink to={`/categories/${item.id}`} className='link'>{item.name}</NavLink>
                </li>
            ))}
        </ul>
        {/* <div className="categories__info">
            <Link to="/">Help</Link>
            <Link to="/">Terms & Conditions</Link>
        </div> */}
    </div>
}
