import React from 'react'
import './trending.scss'
import { Link } from 'react-router-dom'
import { Title } from '../Title/Title'
import { ProductCard } from '../ProductCard/ProductCard'
import { Button } from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../feature/products/productsSlice'

export const Trending = ({ onClickProduct }) => {

    const { list } = useSelector(state => state.products)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const products = list.slice(10, 15)

    return <div className='trending'>
        <Title>Less than 100$</Title>
        <div className="trending__cards">
            {products.map(p => (
                <Link
                    key={p.id}
                    to={`products/${p.id}`}
                    onClick={() => onClickProduct(p.id)}>
                    <ProductCard {...p} />
                </Link>))}
        </div>

        <div className="forCenterButton">
            <Button>See more</Button>
        </div>

    </div>
}
