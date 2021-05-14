import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import HOST from '../const/host';

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

export const update = createAsyncThunk(
    'item/update',
    async (data) => {
        try {
            const id = data.id
            delete data.id
            const response = await fetch(
                `${HOST}/api/items/${id}`,
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

export const updateWithPhoto = createAsyncThunk(
    'item/updateWithPhoto',
    async (data) => {
        try {
            let dataRequest = new FormData()
            dataRequest.append('image', { type: 'image/jpg', uri: data['imageUri'], name: data['imageName'] })
            dataRequest.append('id', data['id'])
            dataRequest.append('name', data['name'])
            dataRequest.append('stok', data['stok'])
            dataRequest.append('detail', data['detail'])
            dataRequest.append('category_id', data['category_id'])
            dataRequest.append('price', data['price'])
            dataRequest.append('description', data['description'])
            const id = data['id']
            const response = await fetch(
                `${HOST}/api/items/update/${id}`,
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
            state.message = 'Data produk berhasil ditambahkan'
        },
        [add.rejected]: (state) => {
            state.message = 'Maaf data tidak berhasil ditambahkan'
        },
        [update.fulfilled]: (state) => {
            state.message = 'Data produk berhasil diubah'
        },
        [update.rejected]: (state) => {
            state.message = 'Maaf data tidak berhasil diubah'
        },
        [updateWithPhoto.fulfilled]: (state) => {
            state.message = 'Data produk berhasil diubah'
        },
        [updateWithPhoto.rejected]: (state) => {
            state.message = 'Maaf data tidak berhasil diubah'
        }
    }
})

export const { resetMessage } = itemSlice.actions

export default itemSlice.reducer