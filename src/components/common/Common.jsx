import React from 'react'
import { Trending } from '../Tranding/Trending'
import { Seeing } from '../Seeing/Seeing'
import { Sale } from '../Sale/Sale'
import { Footer } from '../Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { filteredProductsCategory } from '../../feature/products/productsSlice'

export const Common = () => {

    const dispatch = useDispatch()

    const { filtered, list } = useSelector(state => state.products)

    const { activeCategory } = useSelector(state => state.categories)

    React.useEffect(() => {
        dispatch(filteredProductsCategory(Number(activeCategory)))
    }, [activeCategory])

    return <>
        <Trending products={filtered} title={'Trending'} />
        <Seeing />
        <Sale />
        <Trending products={list} title={'Less than 100$'} />
        <Footer />
    </>
}
