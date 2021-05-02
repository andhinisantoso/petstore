import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: {
        listFavourite: []
    },
    reducers: {
        add: (state, action) => {
            state.listFavourite = [...state.listFavourite.filter(item => item.id != action.payload.id), action.payload]
        }
    }
})

export const { add } = favouriteSlice.actions

export default favouriteSlice.reducer