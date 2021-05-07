import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        value: ''
    },
    reducers: {
        set: (state, action) => {
            state.value = action.payload.value
        }
    },
})

export const { set } = navigationSlice.actions

export default navigationSlice.reducer