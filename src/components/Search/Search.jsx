import React from 'react'
import search from '../../image/header/search.svg'
import '../Header/header.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getSearch } from '../../feature/search/search'
import { Link } from 'react-router-dom'
import debounce from 'lodash.debounce'

export const Search = () => {

    const dispatch = useDispatch()

    const { list } = useSelector(state => state.search)

    const [searchValue, setSearchValue] = React.useState('')

    const updateSearchValue = React.useCallback(debounce(str => {
        dispatch(getSearch(str))
    }, 500), [])


    const handleSearch = ({ currentTarget: { value } }) => {
        setSearchValue(value)
        updateSearchValue(value)
    }

    return <>
        <div className="header__search">
            <input
                value={searchValue}
                onChange={handleSearch}
                type="text"
                placeholder='Search for anything...' />

            <img className='search' src={search} alt="search" />

            {searchValue.length > 0 ?
                <ul className='header__filtered_product'>
                    {list.map(pr =>
                        <Link to={`/products/${pr.id}`} className='filtered_product' onClick={() => setSearchValue('')}>
                            <img className='filtered_product-image' src={pr.images[0]} alt="product" />
                            <div className='filtered_product-info'>
                                <div className='filtered_product-title'> {pr.title}</div>
                                <div className='filtered_product-price'>{pr.price}$</div>
                            </div>
                        </Link>)}
                </ul>
                : false
            }
        </div>

    </>
}
