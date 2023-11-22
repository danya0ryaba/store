import React from 'react'
import { Button } from '../Button/Button'
import './card.scss'

import { useSelector } from 'react-redux'
import { ItemCard } from './ItemCard'

// ЭТО ПОД КОРЗИНУ

export const Card = () => {

    const { list } = useSelector(state => state.cards)



    return <div className='card_bin'>

        <h5 className="card_bin__title">Your cart</h5>

        <div className='card_bin_main'>
            {
                list.map(product => (
                    <span key={product.id}>
                        <ItemCard {...product} />
                    </span>
                ))
            }
        </div>

        <div className="card_bin__result">
            <h6 className='totalPrice'>TOTAL PRICE: <b>198$</b> </h6>
            <Button width={212}>Proceed to checkout</Button>
        </div>

    </div>
}