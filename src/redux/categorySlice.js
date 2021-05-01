import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import HOME from '../const/host';

export const getCategories = createAsyncThunk(
    'category/getCategories',
    async () => {
        const response = await fetch(`${HOME}/api/categories`)
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