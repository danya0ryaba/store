import React from 'react'
import './banner.scss'
import { Button } from '../Button/Button'
import banner from '../../image/banner/banner.png'

export const Banner = () => {
    return <div className='banner'>
        <h2 className='banner__sale'>BIG SALE 20%</h2>
        <h3 className='year'>the bestseller of 2022 </h3>
        <h2 className='main_title'>LENNON r2d2 <br /> with NVIDIA 5090 TI</h2>
        <Button >Shop Now</Button>
        <div className="banner__image">
            <img src={banner} alt="image banner" />
        </div>
    </div>
}
