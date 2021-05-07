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
        try {
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

        } catch (error) {
            return error
        }
    }
)

export const itemSlice = createSlice({
    name: 'item',
    initialState: {
        listItem: [],
        status: '',
        message: ''
    },
    reducers: {
        resetMessage: (state) => {
            state.message = ''
        }
    },
    extraReducers: {
        [getAllItem.pending]: (state) => {
            state.status = 'pending in get all'
        },
        [getAllItem.fulfilled]: (state, action) => {
            state.listItem = action.payload.filter(item => item.stok > 0)
            state.status = 'ok in get all'
        },
        [getAllItem.rejected]: (state) => {
            state.status = 'rejected in get all'
        },
        [add.fulfilled]: (state) => {
            state.message = 'Data produk berhasil ditambahkan'
        },
        [add.rejected]: (state) => {
            state.message = 'Maaf data tidak berhasil ditambahkan'
        }
    }
})

export const { resetMessage } = itemSlice.actions

export default itemSlice.reducer