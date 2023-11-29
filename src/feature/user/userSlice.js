import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constans";
import axios from 'axios'

// функция отвечает за регистрацию пользователя

export const createUser = createAsyncThunk(
    'user/createUser',
    async (payload, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASE_URL}/users`, payload)
            return response.data
        } catch (er) {
            console.log(er.message);
            return rejectWithValue(er)
        }
    }
)



// функция авторизации пользователя
export const authorizationUser = createAsyncThunk(
    'user/authorization',
    async (payload, { rejectWithValue }) => {

        try {
            const res = await axios.post(`${BASE_URL}/auth/login`, payload)

            const login = await axios.get(`${BASE_URL}/auth/profile`, {
                headers: {
                    Authorization: `Bearer ${res.data.access_token}`
                }
            })
            return login.data
        } catch (er) {
            console.log(er.message);
            return rejectWithValue(er)
        }
    }
)




export const userSlice = createSlice({
    name: 'user',
    initialState: {
        showForm: false,
        loginOrLogUp: 'logup',
        currentUser: {},
    },
    reducers: {
        modeWindow: (state, { payload }) => {
            state.showForm = payload
        },
        modeLogin: (state, { payload }) => {
            state.loginOrLogUp = payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.fulfilled, (state, { payload }) => {
                state.currentUser = payload
            })

            .addCase(authorizationUser.fulfilled, (state, { payload }) => {
                state.currentUser = payload
            })
    }
})

export const { modeWindow, modeLogin } = userSlice.actions

export default userSlice.reducer