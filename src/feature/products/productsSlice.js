import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constans";
import axios from 'axios'

export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/products`)
            return response.data
        } catch (error) {
            console.log(error);
            return rejectWithValue(error)
        }
    }
)

export const filteredProductsCategory = createAsyncThunk(
    'products/filteredProductsCategory',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/products/?categoryId=${id}`)
            return response.data
        } catch (error) {
            console.log(error);
            return rejectWithValue(error)
        }
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        list: [],
        filtered: [],
        isLoading: false
    },
    reducers: {
        // нажо бы написать функцию-action для фильтрации товара по цене 
        // (можно через фильтрацию на сервере)

        // filterByPrice: (state, { payload }) => {
        //     if (state.list.length !== 0) {
        //         state.filtered = state.list.filter(item => item.price < payload)
        //     } else {
        //         state.filtered = state.list
        //     }
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, { payload }) => {
                state.list = payload
                state.isLoading = true;
            })
            .addCase(getProducts.pending, (state) => {
                state.isLoading = false;
            })
            .addCase(getProducts.rejected, (state) => {
                state.isLoading = false
            })


            .addCase(filteredProductsCategory.fulfilled, (state, { payload }) => {
                state.filtered = payload
                state.isLoading = true;
            })
            .addCase(filteredProductsCategory.pending, (state) => {
                state.isLoading = false;
            })
            .addCase(filteredProductsCategory.rejected, (state) => {
                state.isLoading = false
            })
    }
})

// export const { filterByPrice } = productsSlice.actions

export default productsSlice.reducer; 