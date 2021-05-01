import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './categorySlice';
import logReducer from './logSlice';

export default configureStore({
    reducer: {
        category: categoryReducer,
        log: logReducer
    }
})