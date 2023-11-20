import React from 'react'
import './seeing.scss'
import { Title } from '../Title/Title'
import { useSelector } from 'react-redux'
import { SeeingProduct } from './SeeingProduct/SeeingProduct'

export const Seeing = () => {

    // тут псевдокатегории т.к. какой-то пидор картинки испортил в api
    // беру картинки из products в state
    let categories = useSelector(state => state.products.list).slice(35, 40)


    return <div className='seeing'>
        <Title>Worth seeing</Title>
        <div className="seeing__product">
            {categories.map(item => (<SeeingProduct
                key={item.id}
                image={item.images[0]}
                name={item.category.name} />))}
        </div>
    </div>
}
