import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import categoryReducer from './categorySlice';
import logReducer from './logSlice';

const persistConfig = {
    key: 'root',
    // version: 1,
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    category: categoryReducer,
    log: logReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

export const persistore = persistStore(store)