import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constans";
import axios from 'axios'

// export const getCards = createAsyncThunk(
//     "cards/getCards",
//     async (id, { rejectWithValue }) => {
//         try {
//             const response = await axios.get(`${BASE_URL}/products/${id}`)
//             return response.data
//         } catch (error) {
//             console.log(error);
//             rejectWithValue(error)
//         }
//     }
// )

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        list: [],
        totalPrice: 0,
        isLoading: false,
        error: true
    },
    reducers: {
        addProduct: (state, { payload }) => {
            if (state.list.every(item => item.id !== payload.id)) {
                state.list.push(payload)
            }
        },
        removeProduct: (state, { payload }) => {
            let obj = state.list.find(item => item.id === payload)
            let index = state.list.indexOf(obj)
            state.list.splice(index, 1)
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getProduct.fulfilled, (state, { payload }) => {
    //             state.list.push(payload)
    //             state.isLoading = true
    //             state.error = false
    //         })
    //         .addCase(getProduct.pending, (state) => {
    //             state.isLoading = false
    //             state.error = false
    //         })
    //         .addCase(getProduct.rejected, (state, { payload }) => {
    //             state.isLoading = false
    //             state.error = true
    //         })
    // }
})

export const { addProduct, removeProduct } = cardsSlice.actions

export default cardsSlice.reducer; 