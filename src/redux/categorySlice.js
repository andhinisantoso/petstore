import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import HOST from '../const/host';

export const getCategories = createAsyncThunk(
    'category/getCategories',
    async () => {
        const response = await fetch(`${HOST}/api/categories`)
        return response.json()
    }
)

export const add = createAsyncThunk(
    'category/add',
    async (data) => {
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
    }
)

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        listCategory: [],
        status: ''
    },
    extraReducers: {
        [getCategories.pending]: (state) => {
            state.status = 'pending'
        },
        [getCategories.fulfilled]: (state, action) => {
            state.listCategory = action.payload
            state.status = 'success'
        },
        [getCategories.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
})

export default categorySlice.reducer