import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'bag',
    initialState: {
        listItem: [],
        totalPrice: 0
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
        }
    }
})

export const { addToCart, plusOne, minusOne } = cartSlice.actions

export default cartSlice.reducer