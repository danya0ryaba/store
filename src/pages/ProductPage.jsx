import React from 'react'
import { BannerProduct } from '../components/Banner/BannerProduct'
import { Trending } from '../components/Tranding/Trending'
import { Categories } from '../components/Categories/Categories'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../feature/product/productSlice'
import { addProduct } from '../feature/cards/cardsSlice'

export const ProductPage = () => {
    const dispatch = useDispatch()

    const { productId } = useParams()

    const { list } = useSelector(state => state.product)
    const { filtered } = useSelector(state => state.products)

    React.useEffect(() => {
        dispatch(getProduct(productId))
    }, [productId, dispatch])

    const addProductToCard = () => dispatch(addProduct(list))

    return <>
        <div className='main'>
            <Categories />
            <BannerProduct {...list} addProductToCard={addProductToCard} />
        </div>
        <Trending products={filtered} title={'Related products'} />
    </>
}

