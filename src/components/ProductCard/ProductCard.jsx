import React from 'react'
import './product-card.scss'
// import product from '../../image/product/product.png'


// {
//     "id": 43,
//         "title": "Handmade Soft Table",
//             "price": 974,
//                 "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
//                     "images": [
//                         "https://i.imgur.com/Au8J9sX.jpeg",
//                         "https://i.imgur.com/gdr8BW2.jpeg",
//                         "https://i.imgur.com/KDCZxnJ.jpeg"
//                     ],
//                         "creationAt": "2023-11-14T22:17:14.000Z",
//                             "updatedAt": "2023-11-14T22:17:14.000Z",
//                       "category": {
//         "id": 4,
//             "name": "Shoes",
//             "image": "https://i.imgur.com/qNOjJje.jpeg",
//             "creationAt": "2023-11-14T22:17:14.000Z",
//              "updatedAt": "2023-11-14T22:17:14.000Z"
//     }
// }



// ИСПРАВЛЯТЬ ВЕРСТКУ
// пиздец криво сверстал
export const ProductCard = (p) => {

    return <div className="product">
        <div className='product__image'>
            <img src={p.category.image} alt="product" />
        </div>

        <h4 className="product__title">{p.title}</h4>
        <h4 className='product__name'>{p.category.name}</h4>
        <div className="product__info">
            <div className="price">
                <span className="price-new">{p.price}$</span>
                <span className="price-old">79$</span>
            </div>
            <span className="sales">19 people purchased</span>
        </div>
    </div>
}
