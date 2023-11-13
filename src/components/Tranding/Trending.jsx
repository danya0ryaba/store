import React from 'react'
import { Link } from 'react-router-dom'
import { Title } from '../Title/Title'
import { ProductCard } from '../ProductCard/ProductCard'
import './trending.scss'
import { Button } from '../Button/Button'

const product = [1, 2, 3, 4, 5]

export const Trending = () => {
    return <div className='trending'>
        <Title>Trending</Title>
        <div className="trending__cards">

            {product.map((pr, index) => (
                <Link key={index} to="/product">
                    <ProductCard />
                </Link>
            ))}

        </div>
        <div className="forCenterButton">
            <Button>See more</Button>
        </div>

    </div>
}
