import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './categorySlice';

export default configureStore({
    reducer: {
        category: categoryReducer
    }
})