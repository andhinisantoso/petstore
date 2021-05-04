import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import HOST from '../const/host';

export const login = createAsyncThunk(
    'log/login',
    async (data) => {
        const response = await fetch(
            `${HOST}/api/login`,
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

export const edit = createAsyncThunk(
    'log/edit',
    async (data) => {
        const id = data.id
        delete data.id
        const response = await fetch(
            `${HOST}/api/users/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        )
        return response.json()
    }
)

const logSlice = createSlice({
    name: 'log',
    initialState: {
        userId: null,
        username: '',
        image: '',
        email: '',
        phone: '',
        password: '',
        role: '',
        status: 'logout',
        statusEdit: 'idle'
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
                state.userId = action.payload.id
                state.username = action.payload.name
                state.image = action.payload.image
                state.email = action.payload.email
                state.phone = action.payload.phone
                state.password = action.payload.password
                state.role = action.payload.role
                state.status = 'login'
            } else {
                state.data = 'login failed'
            }
        },
        [login.rejected]: (state) => {
            state.status = 'rejected'
        },
        [edit.fulfilled]: (state, action) => {
            state.userId = action.payload.id
            state.username = action.payload.name
            state.image = action.payload.image
            state.email = action.payload.email
            state.phone = action.payload.phone
            state.password = action.payload.password
            state.role = action.payload.role
            state.statusEdit = 'fullfilled'
        },
        [edit.rejected]: (state) => {
            state.statusEdit = 'rejected'
        }
    }
})

export const { logout } = logSlice.actions

export default logSlice.reducer