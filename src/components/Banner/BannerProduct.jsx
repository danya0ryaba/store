import React from 'react'
import './banner.scss'
import { Button } from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux'

const sizes = [4.5, 5, 5.5]

export const BannerProduct = ({
    id,
    title,
    price,
    description,
    images,
    creationAt,
    updatedAt,
    category,
    addProductToCard
}) => {

    const imgValue = images && images.length > 0;
    const [currentSize, setCurrentSize] = React.useState()

    return <div className='banner'>
        <div className="banner__product">
            <div className="product__image">
                {imgValue && <img src={images[0]} alt="product" />}
            </div>
            <div className="product__slider">

                {imgValue &&
                    images.map((adress, index) => (
                        <img key={index} src={adress} alt="slider" className="slider" />
                    ))
                }

            </div>
            <div className="product__info_card">
                <h3 className="product__title_name">{title}</h3>
                <h4 className="product__price">{price}$</h4>
                <div className="product__color">
                    <span>Color: <b>Blanc</b></span>
                </div>

                <div className="product__size">
                    <span>Sizes:  </span> {sizes.map((item, index) => (
                        <b key={index}
                            onClick={() => setCurrentSize(item)}
                            className={`item__size ${item === currentSize ? 'item__size--active' : ''}`}>
                            {item}
                        </b>
                    ))}
                </div>

                <p className="product__description">{description}</p>

                <div className="buttons">
                    <div className="marginForButton" onClick={addProductToCard}>
                        <Button>Add to cart</Button>
                    </div>
                    <Button disabled={true}>Add to favorites</Button>
                </div>
                <div className="product__about">
                    <a href="/" className="link">19 people purchased</a>
                    <a href="/" className="link">Find in a store</a>
                </div>
            </div>
        </div>
    </div >
}
