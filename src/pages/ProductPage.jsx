import React from 'react'
import { BannerProduct } from '../components/Banner/BannerProduct'
import { Trending } from '../components/Tranding/Trending'
import { Categories } from '../components/Categories/Categories'

export const ProductPage = () => {
    return <>
        <div className='main'>
            <Categories />
            <BannerProduct />
        </div>
        <Trending />
    </>
}

