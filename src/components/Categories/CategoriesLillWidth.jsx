import React from 'react'
import './categories.scss'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { activeIdCategory } from '../../feature/categories/categoriesSlice'

export const CategoriesLillWidth = () => {

    const [modeCategory, setModeCategory] = React.useState(false)

    const dispatch = useDispatch()

    const { list, isLoading } = useSelector(state => state.categories)


    return <>
        <h2 onClick={() => setModeCategory(!modeCategory)}>categories</h2>
        {!isLoading && <h4>Loading ...</h4>}

        {modeCategory && <ul className='menu'>
            {list.slice(0, 5).map(item => (
                <li key={item.id} className='menu__item' onClick={() => dispatch(activeIdCategory(item.id))}>
                    <NavLink
                        to={`/categories/${item.id}`}
                        className={({ isActive }) => [isActive ? 'link--active' : 'link']}>
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </ul>}
    </>
}
