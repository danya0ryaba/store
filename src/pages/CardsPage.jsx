import React from 'react'
import { Card } from '../components/Card/Card'
import { Trending } from '../components/Tranding/Trending'
import { Categories } from '../components/Categories/Categories'
import { useSelector } from 'react-redux'

export const CardsPage = () => {
    const { filtered } = useSelector(state => state.products)
    return (<>
        <div className='main'>
            <Categories />
            <Card />
        </div>
        <Trending products={filtered} />
    </>)
}

