import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        list: [],
        allProduct: 0,
        isLoading: false,
        error: true
    },
    reducers: {
        addProduct: (state, { payload }) => {
            if (state.list.every(item => item.id !== payload.id)) {
                payload = { ...payload, qentity: 1 }
                state.list.push(payload)

                state.allProduct = state.allProduct + 1;

            }
        },
        removeProduct: (state, { payload }) => {
            let obj = state.list.find(item => item.id === payload)
            let index = state.list.indexOf(obj)
            state.list.splice(index, 1)

            state.allProduct = state.allProduct - 1
        },
        plusProduct: (state, { payload }) => {
            const product = state.list.find(item => item.id === payload)
            product.qentity += 1;
        },
        minusProduct: (state, { payload }) => {
            const product = state.list.find(item => item.id === payload)
            if (product.qentity > 1) {
                product.qentity -= 1
            }
        }
    },
})

export const { addProduct, removeProduct, plusProduct, minusProduct } = cardsSlice.actions

export default cardsSlice.reducer; 