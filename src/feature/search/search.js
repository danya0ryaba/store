import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constans";
import axios from 'axios'

export const getSearch = createAsyncThunk(
    'search/getSearch',
    async (title, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASE_URL}/products/?title=${title}`)
            return response.data
        } catch (error) {
            console.log(error);
            return rejectWithValue(error)
        }
    }
)


export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        list: [],
        isLoading: true,
        error: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSearch.fulfilled, (state, { payload }) => {
                state.list = payload
                state.isLoading = false
                state.error = false
            })
            .addCase(getSearch.pending, (state, { payload }) => {
                state.isLoading = true
                state.error = false
            })
            .addCase(getSearch.rejected, (state, { payload }) => {
                state.isLoading = false
                state.error = true
            })
    }
})

export default searchSlice.reducer