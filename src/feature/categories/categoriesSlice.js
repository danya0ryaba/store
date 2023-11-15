import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constans";
import axios from 'axios'

export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/categories`)
            return response.data
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error)
        }
    }
)

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        isLoading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.fulfilled, (state, { payload }) => {
                state.list = payload
                state.isLoading = true;
            })
            .addCase(getCategories.pending, (state, { payload }) => {
                state.isLoading = false;
            })
            .addCase(getCategories.rejected, (state, { payload }) => {
                // ВРОДЕ КАК ТЕПЕРЬ ОБРАБАТЫВАЕТСЯ ОШИБКА ЗАПРОСА ТУТ, А НЕ В createAsyncThunk
                state.isLoading = false
            })
    }
})

export default categoriesSlice.reducer; 