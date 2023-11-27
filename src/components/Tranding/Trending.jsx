import React from 'react'
import './trending.scss'
import { Link } from 'react-router-dom'
import { Title } from '../Title/Title'
import { ProductCard } from '../ProductCard/ProductCard'
import { Button } from '../Button/Button'
import { useSelector } from 'react-redux'

export const Trending = ({ products, title }) => {

    const [quentity, setQuentity] = React.useState(5)

    const { activeCategory, list } = useSelector(state => state.categories)

    const currentCategory = list.find(cat => cat.id === activeCategory)

    if (currentCategory) products = products.filter(p => p.category.name === currentCategory.name)
    else products = products.filter(p => p.category.name === 'Clothes');

    products = products.slice(0, quentity)






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

        <div className="forCenterButton" onClick={() => setQuentity(quentity => quentity + 5)}>
            <Button>See more</Button>
        </div>

    </div>
}
