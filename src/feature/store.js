import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from '../feature/categories/categoriesSlice'
import productsSlice from '../feature/products/productsSlice'
import productSlice from '../feature/product/productSlice'

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        product: productSlice
    },
    devTools: true
})