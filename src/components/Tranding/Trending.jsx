import React from 'react'
import './trending.scss'
import { Link } from 'react-router-dom'
import { Title } from '../Title/Title'
import { ProductCard } from '../ProductCard/ProductCard'
import { Button } from '../Button/Button'

export const Trending = ({ products, title }) => {

    return <div className='trending'>
        <Title>{title}</Title>
        <div className="trending__cards">
            {products.map(p => (
                <Link
                    key={p.id}
                    to={`/products/${p.id}`}
                    onClick={() => window.scrollTo(0, 0)}>
                    <ProductCard {...p} />
                </Link>))}
        </div>

        <div className="forCenterButton">
            <Button>See more</Button>
        </div>

    </div>
}
