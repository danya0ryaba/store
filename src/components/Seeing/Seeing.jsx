import React from 'react'
import './seeing.scss'
import { Title } from '../Title/Title'
import { SeeingProduct } from './SeeingProduct/SeeingProduct'

const seeing = [1, 2, 3, 4, 5]

export const Seeing = () => {
    return <div className='seeing'>
        <Title>Worth seeing</Title>
        <div className="seeing__product">
            {seeing.map((item, index) => (<SeeingProduct key={index} />))}
        </div>
    </div>
}
