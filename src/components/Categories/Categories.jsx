import React, { useEffect } from 'react'
import './categories.scss'
import { Link } from 'react-router-dom'
// import { categotyAPI } from '../../DAL/api'

const categories = ['Computers', 'Clothes', 'Shoes', 'Furniture', 'Cosmetics', 'Travel', 'Automotive']


export const Categories = () => {
    // let my_promise;
    // useEffect(() => {
    //     categotyAPI.getCategory()
    // }, [])

    return <div className='categories'>
        <h2>CATEGORIES</h2>
        <ul className='menu'>
            {categories.map((item, index) => (
                <li key={index} className='menu__item'>
                    <Link to='/' className='link'>{item}</Link>
                </li>
            ))}
        </ul>
        <div className="categories__info">
            <Link to="/">Help</Link>
            <Link to="/">Terms & Conditions</Link>
        </div>
    </div>
}
