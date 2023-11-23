import React from 'react'
import './header.scss'
import logo from '../../image/header/LOGO.svg'
import user from '../../image/header/user.svg'
import search from '../../image/header/search.svg'
import like from '../../image/header/like.svg'
import cards from '../../image/header/cards.svg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Header = () => {

    const { allProduct } = useSelector(state => state.cards)

    return <header className='header'>
        <Link to="/"> <img src={logo} alt="logo" className="logo" /></Link>


        <div className="header__user">
            <div className="image">
                <img src={user} alt="user" />
            </div>

            <span>Daniil Ryabenkov</span>
        </div>

        <div className="header__search">
            <input type="text" placeholder='Search for anything...' />
            <img src={search} alt="search" />
        </div>

        <div className="header__icons">
            <img src={like} alt="like" />

            <Link to='cards'>
                <img src={cards} alt="cards" />
                <div className="count"><span>{allProduct}</span></div>
            </Link>

        </div>
    </header>
}