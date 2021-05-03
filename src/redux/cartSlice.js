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
        }
    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer