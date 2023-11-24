import React from 'react'
import search from '../../image/header/search.svg'
import '../Header/header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getSearch } from '../../feature/search/search'
import { Link } from 'react-router-dom'

export const Search = () => {

    const dispatch = useDispatch()
    const { list } = useSelector(state => state.search)

    const [searchValue, setSearchValue] = React.useState('')

    const handleSearch = ({ currentTarget: { value } }) => {
        //  привентить сюда debounce
        setSearchValue(value)
        dispatch(getSearch(value))
    }

    return <>
        <div className="header__search">
            <input value={searchValue}
                onChange={handleSearch}
                type="text"
                placeholder='Search for anything...' />

            <img src={search} alt="search" />

            {searchValue.length > 0 ?
                <ul className='header__filtered_product'>

                    {list.map(pr =>
                        // onClick={() => searchValue('')}
                        // при нажатии надо занулять инпут
                        <Link to={`/products/{pr.id}`} className='filtered_product'>

                            <img className='filtered_product-image' src={pr.images[0]} alt="product" />
                            {pr.title}

                        </Link>)}
                </ul>
                : false
            }
        </div>

    </>
}
