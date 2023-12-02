import React from 'react'
import './categories.scss'
import { NavLink, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { activeIdCategory } from '../../feature/categories/categoriesSlice'
import { useResize } from '../../hooks/useResize'
import { CategoriesLillWidth } from './CategoriesLillWidth'

export const Categories = () => {

    const onScrollProduct = (id) => {
        window.scroll(0, 500)
        dispatch(activeIdCategory(id))
    }

    const width = useResize()

    const dispatch = useDispatch()

    const { list, isLoading } = useSelector(state => state.categories)

    return <div className='categories'>
        {width < 545 ?
            <CategoriesLillWidth /> :
            <>
                <h2 >categories</h2>
                {!isLoading && <h4>Loading ...</h4>}
                <ul className='menu'>
                    {list.slice(0, 5).map(item => (
                        <li key={item.id} className='menu__item' onClick={() => onScrollProduct(item.id)}>
                            <NavLink
                                to={`/categories/${item.id}`}
                                className={({ isActive }) => [isActive ? 'link--active' : 'link']}>
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </>}

        <div className="categories__info">
            <Link to="/">Help</Link>
            <Link to="/">Terms & Conditions</Link>
        </div>
    </div>
}
