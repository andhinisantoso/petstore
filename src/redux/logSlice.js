import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import HOME from '../const/host';

export const login = createAsyncThunk(
    'log/login',
    async (data) => {
        const response = await fetch(
            `${HOME}/api/login`,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )
        const result = await response.json()
        return result
    }
)

const logSlice = createSlice({
    name: 'log',
    initialState: {
        userId: null,
        role: '',
        status: 'logout',
    },
    reducers: {
        logout: (state) => {
            state.userId = null
            state.role = ''
            state.status = 'logout'
        }
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.status = 'pending'
        },
        [login.fulfilled]: (state, action) => {
            if (action.payload.code === 200) {
                state.userId = action.payload.userId
                state.role = action.payload.role
                state.status = 'login'
            } else {
                state.data = 'login failed'
            }
        },
        [login.rejected]: (state) => {
            state.status = 'rejected'
        }
    }
})

export const { logout } = logSlice.actions

export default logSlice.reducer