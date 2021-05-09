import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import HOST from '../const/host';
import { ToastAndroid } from 'react-native'

export const add = createAsyncThunk(
    'category/add',
    async (data) => {
        try {
            let dataRequest = new FormData()
            dataRequest.append('image', { type: 'image/jpg', uri: data['imageUri'], name: data['imageName'] })
            dataRequest.append('name', data['name'])
            const response = await fetch(
                `${HOST}/api/categories`,
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

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        status: '',
        message: ''
    },
    reducers: {
        resetMessage: (state) => {
            state.message = ''
        }
    },
    extraReducers: {
        [add.fulfilled]: (state) => {
            state.message = 'Kategori baru berhasil disimpan'
        },
        [add.rejected]: (state) => {
            state.message = 'Maaf kategori baru tidak berhasil disimpan'
        }
    }
})

export const { resetMessage } = categorySlice.actions

export default categorySlice.reducer