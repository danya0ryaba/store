import React from 'react'
import './card.scss'
import { useDispatch } from 'react-redux'
import { plusProduct, minusProduct, removeProduct } from '../../feature/cards/cardsSlice'

export const ItemCard = React.memo((props) => {

    const dispatch = useDispatch()

    const deleteProduct = (idProduct) => dispatch(removeProduct(idProduct))

    return <div className="card_bin__item">

        <div className="card_bin__item_image">
            <img src={props.images[0]} alt="sneakers" />
        </div>

        <div className="card_bin__item_desc">
            <div className="desc__title">{props.title}</div>
            <div className="desc__category">{props.category.name}</div>
        </div>

        <div className="card_bin__item_price">{props.price + (Math.floor(props.price * 0.2))}$</div>

        <div className="card_bin__item_quentity">

            <button className='minus' onClick={() => dispatch(minusProduct(props.id))}>
                <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.4895 0.3125H1.51055C0.883398 0.3125 0.375 0.843164 0.375 1.5C0.375 2.15684 0.883398 2.6875 1.51055 2.6875H13.4895C14.1166 2.6875 14.625 2.15684 14.625 1.5C14.625 0.843164 14.1166 0.3125 13.4895 0.3125Z" fill="white" fillOpacity="0.5" />
                </svg>
            </button>

            <span className="count">{props.qentity}</span>

            <button className="plus" onClick={() => dispatch(plusProduct(props.id))}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.125 6.5625H8.4375V1.875C8.4375 1.3575 8.0175 0.9375 7.5 0.9375C6.9825 0.9375 6.5625 1.3575 6.5625 1.875V6.5625H1.875C1.3575 6.5625 0.9375 6.9825 0.9375 7.5C0.9375 8.0175 1.3575 8.4375 1.875 8.4375H6.5625V13.125C6.5625 13.6425 6.9825 14.0625 7.5 14.0625C8.0175 14.0625 8.4375 13.6425 8.4375 13.125V8.4375H13.125C13.6425 8.4375 14.0625 8.0175 14.0625 7.5C14.0625 6.9825 13.6425 6.5625 13.125 6.5625Z" fill="white" />
                </svg>
            </button>

        </div>

        <div className="card_bin__item_new_price">{props.price * props.qentity}$</div>

        <div className="close" onClick={() => deleteProduct(props.id)}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.65572 5.383C4.75272 5.4805 4.88022 5.529 5.00772 5.529C5.13522 5.529 5.26272 5.4805 5.35972 5.383C5.55422 5.1885 5.55422 4.873 5.35972 4.6785L1.37722 0.691999C1.18272 0.497499 0.867719 0.497499 0.673219 0.691999C0.478719 0.886499 0.478719 1.202 0.673219 1.3965L4.65572 5.383Z" fill="white" fillOpacity="0.5" />
                <path d="M7.70342 7.024L13.3259 1.3965C13.5204 1.202 13.5204 0.8865 13.3259 0.692C13.1314 0.4975 12.8164 0.4115 12.6219 0.6065L6.64792 6.5H6.49992V6.6725L0.599925 12.6515C0.405425 12.846 0.442425 13.1615 0.636425 13.356C0.733425 13.4535 0.879425 13.502 1.00692 13.502C1.13442 13.502 1.27092 13.4535 1.36792 13.356L6.99492 7.729L12.6194 13.3565C12.7164 13.454 12.8454 13.5025 12.9724 13.5025C13.0994 13.5025 13.2279 13.454 13.3249 13.3565C13.5194 13.162 13.5199 12.8465 13.3254 12.652L7.70342 7.024Z" fill="white" fillOpacity="0.5" />
            </svg>
        </div>

    </div>

})