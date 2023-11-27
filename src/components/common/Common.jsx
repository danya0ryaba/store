import React from 'react'
import { Trending } from '../Tranding/Trending'
import { Seeing } from '../Seeing/Seeing'
import { Sale } from '../Sale/Sale'
import { Footer } from '../Footer/Footer'
import { useSelector } from 'react-redux'

export const Common = () => {

    const { list, filtered } = useSelector(state => state.products)
    // console.log(filtered);

    return <>
        <Trending products={list} title={'Trending'} />
        <Seeing />
        <Sale />
        <Trending products={list} title={'Less than 300$'} />
        <Footer />
    </>
}
