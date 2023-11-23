import React from 'react'
import './categories.scss'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Categories = () => {

    const { list, isLoading } = useSelector(state => state.categories)

    const category = list.slice(0, 5)

    const newCategory = list[list.length - 1]
    // console.log(newCategory);
    return <div className='categories'>
        <h2>categories</h2>
        {!isLoading && <h4>Loading ...</h4>}
        <ul className='menu'>
            {category.map(item => (
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
