import React from 'react'
import './seeing.scss'
import { Title } from '../Title/Title'
import { useSelector } from 'react-redux'
import { SeeingProduct } from './SeeingProduct/SeeingProduct'

export const Seeing = () => {

    let { list } = useSelector(state => state.categories)
    list = list.slice(0, 5)

    return <div className='seeing'>
        <Title>Worth seeing</Title>
        <div className="seeing__product">
            {list.map(item => (<SeeingProduct
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name} />))}
        </div>
    </div>
}
