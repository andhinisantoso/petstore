import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import HOST from '../const/host';

export const login = createAsyncThunk(
    'log/login',
    async (data) => {
        try {
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
        } catch (error) {
            return error
        }
    }
)

export const edit = createAsyncThunk(
    'log/edit',
    async (data) => {
        try {
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
        } catch (error) {
            return error
        }
    }
)

export const editWithPhoto = createAsyncThunk(
    'log/editWithPhoto',
    async (data) => {
        try {
            let dataRequest = new FormData()
            dataRequest.append('image', { type: 'image/jpg', uri: data['imageUri'], name: data['imageName'] })
            dataRequest.append('id', data['id'])
            dataRequest.append('name', data['name'])
            dataRequest.append('email', data['email'])
            dataRequest.append('phone', data['phone'])
            if (data['password']) {
                dataRequest.append('password', data['password'])
            }
            if (data['address']) {
                dataRequest.append('address', data['address'])
            }
            const id = data['id']
            const response = await fetch(
                `${HOST}/api/users/update/${id}`,
                {
                    method: 'POST',
                    body: dataRequest
                }
            )
            return response.json()
        } catch (error) {
            return error
        }
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
        address: '',
        password: '',
        role: '',
        status: 'logout',
        statusEdit: 'idle',
        message: ''
    },
    reducers: {
        logout: (state) => {
            state.userId = null
            state.role = ''
            state.status = 'logout'
        },
        resetMessage: (state) => {
            state.message = ''
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
                state.address = action.payload.address
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
            state.address = action.payload.address
            state.phone = action.payload.phone
            state.password = action.payload.password
            state.role = action.payload.role
            state.statusEdit = 'fullfilled'
            state.message = 'Perubahan berhasil disimpan'
        },
        [edit.rejected]: (state) => {
            state.statusEdit = 'rejected'
            state.message = 'Maaf perubahan tidak berhasil disimpan'
        },
        [editWithPhoto.fulfilled]: (state, action) => {
            state.userId = action.payload.id
            state.username = action.payload.name
            state.image = action.payload.image
            state.email = action.payload.email
            state.address = action.payload.address
            state.phone = action.payload.phone
            state.password = action.payload.password
            state.role = action.payload.role
            state.statusEdit = 'fullfilled'
            state.message = 'Perubahan berhasil disimpan'
        },
        [editWithPhoto.rejected]: (state, action) => {
            state.statusEdit = action.payload
            state.message = 'Maaf perubahan tidak berhasil disimpan'
        }
    }
})

export const { logout, resetMessage } = logSlice.actions

export default logSlice.reducer