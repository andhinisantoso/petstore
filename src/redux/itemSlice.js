import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import HOME from '../const/host';

export const getAllItem = createAsyncThunk(
    'item/getAllItem',
    async () => {
        const response = await fetch(`${HOME}/api/items`)
        return response.json()
    }
)

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        listItem: [],
        status: ''
    },
    extraReducers: {
        [getAllItem.pending]: (state) => {
            state.status = 'pending in get all'
        },
        [getAllItem.fulfilled]: (state, action) => {
            state.listItem = action.payload
            state.status = 'ok in get all'
        },
        [getAllItem.rejected]: (state) => {
            state.status = 'rejected in get all'
        }
    }
})

export default itemSlice.reducer