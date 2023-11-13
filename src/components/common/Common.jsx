import React from 'react'
import { Trending } from '../Tranding/Trending'
import { Seeing } from '../Seeing/Seeing'
import { Sale } from '../Sale/Sale'
import { Footer } from '../Footer/Footer'

export const Common = () => {
    return <>
        <Trending />
        <Seeing />
        <Sale />
        <Trending />
        <Footer />
    </>
}
