import React from 'react'
import './banner.scss'
import { Button } from '../Button/Button'
import { useSelector } from 'react-redux'



export const BannerProduct = React.memo(({
    title,
    price,
    description,
    images,
    addProductToCard,
    ...rest
}) => {

    const sizes = React.useMemo(() => ([4.5, 5, 5.5]), [])

    const [image, setImage] = React.useState(0)

    const [currentSize, setCurrentSize] = React.useState()

    const { activeCategory, list } = useSelector(state => state.categories)

    const currentCategory = React.useMemo(() => list.find(cat => cat.id === activeCategory), [list])

    const nameCategory = currentCategory ? currentCategory.name : ''

    const imgValue = images && images.length > 0;

    return <div className='banner'>
        <div className="banner__product">

            <div className="product__image">
                {imgValue && <img src={images[image]} alt="product" />}
            </div>


            <div className="product__slider">

                {imgValue &&
                    images.map((adress, index) => (
                        <img onClick={() => setImage(index)}
                            key={index}
                            src={adress}
                            alt="slider"
                            className="slider" />
                    ))
                }

            </div>

            <div className="product__info_card">

                <h3 className="product__title_name">{title}</h3>
                <h4 className="product__price">{price}$</h4>
                <div className="product__color">
                    <span>Color: <b>Blanc</b></span>
                </div>
                {nameCategory === 'Shoes' && <div className="product__size">
                    <span>Sizes:  </span> {sizes.map((item, index) => (
                        <b key={index}
                            onClick={() => setCurrentSize(item)}
                            className={`item__size ${item === currentSize ? 'item__size--active' : ''}`}>
                            {item}
                        </b>
                    ))}</div>}

                <div className="product__description">{description}</div>

                <div className="buttons">
                    <div className="marginForButton" onClick={addProductToCard}>
                        <Button >Add to cart</Button>
                    </div>
                    <Button disabled={true}>Add to favorites</Button>
                </div>

            </div>

        </div>
    </div >
})