import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from '../feature/categories/categoriesSlice'
import productsSlice from '../feature/products/productsSlice'

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice
    },
    devTools: true
})