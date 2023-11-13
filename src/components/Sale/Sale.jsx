import React from 'react'
import './sale.scss'
import { Button } from '../Button/Button'
import sneakers from '../../image/sale/sneaker.png'
import console from '../../image/sale/console.png'

export const Sale = () => {
    return <div className="sale">
        <div className="sale__item">
            <h2 className="sale_title">new year</h2>
            <h2 className="sale_subtitle">sale</h2>
            <div className="forButtonCenter">
                <Button>See more</Button>
            </div>

            <img className='sneakers' src={sneakers} alt="sneakers" />
            <img className='console' src={console} alt="console" />
        </div>
        <div className="sale__item sale__item-second">
            <span>save up to <b>50% </b> off</span>
        </div>
    </div>
}
