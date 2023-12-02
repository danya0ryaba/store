import React from 'react'
import './trending.scss'
import { Link } from 'react-router-dom'
import { Title } from '../Title/Title'
import { ProductCard } from '../ProductCard/ProductCard'
import { Button } from '../Button/Button'

export const Trending = React.memo(({ products, title }) => {

    const [quentity, setQuentity] = React.useState(5)

    const onClickScroll = React.useCallback(() => {
        window.scrollTo(0, 0)
    }, [])

    return <div className='trending'>

        <Title>{title}</Title>

        <div className="trending__cards">
            {products.slice(0, quentity).map(p => (
                <Link
                    key={p.id}
                    to={`/products/${p.id}`}
                    onClick={onClickScroll}>
                    <ProductCard {...p} />
                </Link>))}
        </div>

        <div className="forCenterButton"
            onClick={() => setQuentity(quentity => quentity + 5)}>
            <Button>See more</Button>
        </div>

    </div>
})