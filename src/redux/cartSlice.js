import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import HOST from '../const/host';

export const checkout = createAsyncThunk(
    'cart/checkout',
    async (data) => {
        try {
            const uuid = require("uuid");
            const orderkey = uuid.v4();
            const newOrder = data.map((item) => ({
                user_id: item.userId,
                item_id: item.itemId,
                order_key: orderkey,
                total_order: item.total,
                status: "WAITING"
            }))

            const response = await fetch(
                `${HOST}/api/orders`,
                {
                    method: 'POST',
                    body: JSON.stringify(newOrder)
                }
            )

            return response.json()
        } catch (error) {
            return error
        }
    }
)

const cartSlice = createSlice({
    name: 'bag',
    initialState: {
        listItem: [],
        totalPrice: 0,
        status: 'idle',
        message: ''
    },
    reducers: {
        addToCart: (state, action) => {
            const len = state.listItem.length
            state.listItem = [...state.listItem.filter(item => item.id != action.payload.id), action.payload]
            if (state.listItem.length > len) {
                state.totalPrice += action.payload.price * action.payload.total
            }
        },
        removeFromCart: (state, action) => {
            state.listItem = state.listItem.filter(item => item.id != action.payload.id)
        },
        plusOne: (state, action) => {
            state.listItem.forEach(item => {
                if (item.itemId === action.payload.id) {
                    item.total += 1
                    state.totalPrice += item.price
                }
            })
        },
        minusOne: (state, action) => {
            state.listItem.forEach(item => {
                if (item.itemId === action.payload.id && item.total > 1) {
                    item.total -= 1
                    state.totalPrice -= item.price
                }
            })
        },
        resetMessage: (state) => {
            state.message = ''
        }
    },
    extraReducers: {
        [checkout.pending]: (state) => {
            state.status = 'pending'
        },
        [checkout.fulfilled]: (state, action) => {
            state.listItem = []
            state.totalPrice = 0
            state.status = 'fullfilled'
            state.message = 'Berhasil memesan. Tunggu pesanan diproses toko'
        },
        [checkout.rejected]: (state, action) => {
            state.status = 'rejected'
            state.message = 'Maaf pesanan anda gagal diproses'
        }
    }
})

export const { addToCart, removeFromCart, plusOne, minusOne, resetMessage } = cartSlice.actions

export default cartSlice.reducer