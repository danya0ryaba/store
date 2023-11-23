import React from 'react'
import './card.scss'
import { Button } from '../Button/Button'
import { useSelector } from 'react-redux'
import { ItemCard } from './ItemCard'

export const Card = () => {

    const { list } = useSelector(state => state.cards)

    let totalPrice = 0
    for (let i = 0; i < list.length; i++) {
        totalPrice += list[i].price * list[i].qentity
    }

    return <div className='card_bin'>

        <h5 className="card_bin__title">Your cart</h5>

        <div className='card_bin_main'>
            {list.map(product => (
                <span key={product.id}>
                    <ItemCard {...product} />
                </span>
            ))}
        </div>

        <div className="card_bin__result">
            <h6 className='totalPrice'>TOTAL PRICE: <b>{totalPrice}$</b> </h6>
            <Button width={212}>Proceed to checkout</Button>
        </div>

    </div>
}