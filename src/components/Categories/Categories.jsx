import React from 'react'
import './categories.scss'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { activeIdCategory } from '../../feature/categories/categoriesSlice'

export const Categories = () => {

    const dispatch = useDispatch()

    const { list, isLoading } = useSelector(state => state.categories)


    return <div className='categories'>
        <h2>categories</h2>
        {!isLoading && <h4>Loading ...</h4>}
        <ul className='menu'>
            {list.map(item => (
                <li key={item.id} className='menu__item' onClick={() => dispatch(activeIdCategory(item.id))}>
                    <NavLink
                        to={`/categories/${item.id}`}
                        className={({ isActive }) => [isActive ? 'link--active' : 'link']}>
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </ul>
        {/* <div className="categories__info">
            <Link to="/">Help</Link>
            <Link to="/">Terms & Conditions</Link>
        </div> */}
    </div>
}
