import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import HOST from '../const/host';

export const getAllItem = createAsyncThunk(
    'item/getAllItem',
    async () => {
        const response = await fetch(`${HOST}/api/items`)
        return response.json()
    }
)

export const add = createAsyncThunk(
    'item/add',
    async (data) => {
        let dataRequest = new FormData()
        dataRequest.append('image', { type: 'image/jpg', uri: data['imageUri'], name: data['imageName'] })
        dataRequest.append('name', data['name'])
        dataRequest.append('category_id', data['category_id'])
        dataRequest.append('detail', data['detail'])
        dataRequest.append('price', data['price'])
        dataRequest.append('stok', data['stok'])
        dataRequest.append('description', data['description'])
        const response = await fetch(
            `${HOST}/api/items`,
            {
                method: 'POST',
                body: dataRequest
            }
        )
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