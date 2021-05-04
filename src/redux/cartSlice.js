import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import HOST from '../const/host';

export const checkout = createAsyncThunk(
    'cart/checkout',
    async (data) => {
        const uuid = require("uuid");
        const orderkey = uuid.v4();
        const newOrder = data.map((item) => ({
            user_id: item.userId,
            item_id: item.itemId,
            order_key: orderkey,
            total_order: item.total,
            status: 'WAITING'
        }))

        const response = await fetch(
            `${HOST}/api/orders`,
            {
                method: 'POST',
                body: JSON.stringify(newOrder)
            }
        )

        return response.json()
    }
)

const cartSlice = createSlice({
    name: 'bag',
    initialState: {
        listItem: [],
        totalPrice: 0,
        status: 'idle',
    },
    reducers: {
        addToCart: (state, action) => {
            state.listItem = [...state.listItem.filter(item => item.id != action.payload.id), action.payload]
            state.totalPrice += action.payload.price * action.payload.total
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

    },
    extraReducers: {
        [checkout.pending]: (state) => {
            state.status = 'pending'
        },
        [checkout.fulfilled]: (state, action) => {
            state.listItem = []
            state.totalPrice = 0
            state.status = 'fullfilled'
        },
        [checkout.rejected]: (state) => {
            state.status = 'rejected'
        }
    }
})

export const { addToCart, plusOne, minusOne, cobaarray } = cartSlice.actions

export default cartSlice.reducer