import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constans";
import axios from 'axios'

export const getProduct = createAsyncThunk(
    "product/getProduct",
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/products/${id}`)
            return response.data
        } catch (error) {
            console.log(error);
            rejectWithValue(error)
        }
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState: {
        list: {},
        isLoading: false,
        error: true
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.fulfilled, (state, { payload }) => {
                state.list = payload
                state.isLoading = true
                state.error = false
            })
            .addCase(getProduct.pending, (state) => {
                state.isLoading = false
                state.error = false
            })
            .addCase(getProduct.rejected, (state, { payload }) => {
                state.isLoading = false
                state.error = true
            })
    }
})

export default productSlice.reducer; 