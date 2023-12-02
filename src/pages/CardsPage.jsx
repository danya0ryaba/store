import React from 'react'
import { Card } from '../components/Card/Card'
import { Categories } from '../components/Categories/Categories'

const CardsPage = () => {
    return (<>
        <div className='main'>
            <Categories />
            <Card />
        </div>
    </>)
}

export default CardsPage