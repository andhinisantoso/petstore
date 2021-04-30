import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from '../api/categoryApi';

export const getCategories = createAsyncThunk(
    'category/getCategories',
    async () => {
        const response = await fetch('http://192.168.43.15:8000/api/categories')
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