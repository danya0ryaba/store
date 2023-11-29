import React from 'react'
import './header.scss'
import logo from '../../image/header/LOGO.svg'
import user from '../../image/header/user.svg'
import like from '../../image/header/like.svg'
import cards from '../../image/header/cards.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Search } from '../Search/Search'
import { modeWindow } from '../../feature/user/userSlice'

export const Header = () => {

    const dispatch = useDispatch()
    const { allProduct } = useSelector(state => state.cards)
    const { showForm, currentUser } = useSelector(state => state.user)
    // console.log(currentUser);
    const handleUser = () => {
        dispatch(modeWindow(true))
    }

    const [data, setDate] = React.useState({
        name: 'Guest',
        user: user
    })

    if (Object.keys(currentUser) > 0) {
        setDate(currentUser)
    }

    return <header className='header'>

        <Link to="/">
            <img src={logo} alt="logo" className="logo" />
        </Link>

        <div className="header__user" onClick={handleUser}>

            <div className="image">

                <img src={data.user} alt="user" />

                {/* <img src={user} alt="user" /> */}
            </div>

            <span>{data.name}</span>
        </div>

        <Search />

        <div className="header__icons">
            <img src={like} alt="like" />
            <Link to='cards'>
                <img src={cards} alt="cards" />
                <div className="count">
                    <span>{allProduct}</span>
                </div>
            </Link>
        </div>
    </header>
}