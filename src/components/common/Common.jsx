import React from 'react'
import { Trending } from '../Tranding/Trending'
import { Seeing } from '../Seeing/Seeing'
import { Sale } from '../Sale/Sale'
import { Footer } from '../Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { filterByPrice } from '../../feature/products/productsSlice'

export const Common = () => {
    // const dispatch = useDispatch()
    // React.useEffect(() => {

    // }, [dispatch])

    const { filtered, list } = useSelector(state => state.products)

    const products = list.slice(1, 6)

    const filterProduct = filtered.slice(0, 5)

    return <>
        <Trending products={products} title={'Trending'} />
        <Seeing />
        <Sale />
        <Trending products={filterProduct} title={'Less than 100$'} />
        <Footer />
    </>
}
