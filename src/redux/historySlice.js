import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name: 'history',
    initialState: {
        listHistory: []
    },
    reducers: {
        add: (state, action) => {
            state.listHistory = [...state.listHistory, action.payload]
        }
    }
})

export const { add } = historySlice.actions

export default historySlice.reducer