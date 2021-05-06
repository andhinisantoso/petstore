import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: {
        listFavourite: []
    },
    reducers: {
        add: (state, action) => {
            state.listFavourite = [...state.listFavourite.filter(item => item.id != action.payload.id), action.payload]
        },
        remove: (state, action) => {
            state.listFavourite = state.listFavourite.filter(item => item.id != action.payload.id)
        },
        moveCart: (state, action) => {
            state.listFavourite = state.listFavourite.map(item => {
                if (item.id == action.payload.id) {
                    item.inCart = !item.inCart
                }
                return item
            })
        }
    }
})

export const { add, remove, moveCart } = favouriteSlice.actions

export default favouriteSlice.reducer