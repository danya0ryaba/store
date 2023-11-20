import React from 'react'
import { Card } from '../components/Card/Card'
import { Trending } from '../components/Tranding/Trending'
import { Categories } from '../components/Categories/Categories'

export const CardsPage = () => {
    return (<>
        <div className='main'>
            <Categories />
            <Card />
        </div>
        <Trending />
    </>)
}

