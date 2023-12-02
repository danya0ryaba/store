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

const Header = () => {

    const dispatch = useDispatch()

    const { allProduct } = useSelector(state => state.cards)

    const { currentUser } = useSelector(state => state.user)

    const handleUser = () => dispatch(modeWindow(true))

    const [data, setDate] = React.useState({
        name: 'Guest',
        user: user
    })

    React.useEffect(() => {
        if (Object.keys(currentUser).length === 0) return;
        setDate(currentUser)
    }, [currentUser])

    return <header className='header'>

        <Link to="/">
            <img src={logo} alt="logo" className="logo" />
        </Link>

        <div className="header__user" onClick={handleUser}>

            <div className="image">

                {Object.keys(currentUser).length > 0 ?
                    <img src={data.avatar} alt="user" /> :
                    <img src={data.user} alt="user" />}

            </div>

            <span>{data.name}</span>
        </div>

        <Search />

        <div className="header__icons">
            <Link to={'/'}>
                <img src={like} alt="like" />
            </Link>

            <Link to='cards'>
                <img src={cards} alt="cards" />
                <div className="count">
                    <span>{allProduct}</span>
                </div>
            </Link>
        </div>
    </header>
}

export default Header