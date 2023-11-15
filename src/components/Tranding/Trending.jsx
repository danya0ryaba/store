import React from 'react'
import { Link } from 'react-router-dom'
import { Title } from '../Title/Title'
import { ProductCard } from '../ProductCard/ProductCard'
import './trending.scss'
import { Button } from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../feature/products/productsSlice'

export const Trending = () => {
    const { list } = useSelector(state => state.products)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const products = list.filter((_, index) => index < 5)

    return <div className='trending'>
        <Title>Trending</Title>
        <div className="trending__cards">
            {products.map(p => (
                <Link key={p.id} to={`products/${p.id}`}>
                    <ProductCard {...p} />
                </Link>
            ))}
        </div>

        <div className="forCenterButton">
            <Button>See more</Button>
        </div>

    </div>
}
