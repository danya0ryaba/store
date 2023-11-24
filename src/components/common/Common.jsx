import React from 'react'
import { Trending } from '../Tranding/Trending'
import { Seeing } from '../Seeing/Seeing'
import { Sale } from '../Sale/Sale'
import { Footer } from '../Footer/Footer'
import { useSelector } from 'react-redux'

export const Common = () => {

    const { filtered, list } = useSelector(state => state.products)

    const products = list.slice(0, 5)
    console.log(filtered);
    const filterProduct = filtered.slice(0, 5)

    return <>
        <Trending products={products} title={'Trending'} />
        <Seeing />
        <Sale />
        <Trending products={filterProduct} title={'Less than 100$'} />
        <Footer />
    </>
}
