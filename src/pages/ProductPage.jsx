import React from 'react'
import { BannerProduct } from '../components/Banner/BannerProduct'
import { Trending } from '../components/Tranding/Trending'
import { Categories } from '../components/Categories/Categories'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../feature/product/productSlice'

export const ProductPage = () => {

    const { productId } = useParams()

    const dispatch = useDispatch()
    const product = useSelector(state => state.product.list)

    React.useEffect(() => {
        dispatch(getProduct(productId))
    }, [productId, dispatch])

    return <>
        <div className='main'>
            <Categories />
            <BannerProduct {...product} />
        </div>
        <Trending />
    </>
}

