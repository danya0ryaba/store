import React from 'react'
import './seeing.scss'
import { Title } from '../Title/Title'
import { useSelector } from 'react-redux'
import { SeeingProduct } from './SeeingProduct/SeeingProduct'

export const Seeing = () => {

    // тут псевдокатегории т.к. какой-то пидор картинки испортил в api
    // беру картинки из products в state
    const { list } = useSelector(state => state.categories)
    const category = list.slice(0, 5)

    return <div className='seeing'>
        <Title>Worth seeing</Title>
        <div className="seeing__product">
            {category.map(item => (<SeeingProduct
                key={item.id}
                image={item.image}
                name={item.name} />))}
        </div>
    </div>
}
