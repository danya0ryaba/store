import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from '../feature/categories/categoriesSlice'
import productsSlice from '../feature/products/productsSlice'
import productSlice from '../feature/product/productSlice'
import cardsSlice from '../feature/cards/cardsSlice'

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        product: productSlice,
        cards: cardsSlice
    },
    devTools: true
})