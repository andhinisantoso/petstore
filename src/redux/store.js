import { configureStore, getDefaultMiddleware, combineReducers, createImmutableStateInvariantMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import categoryReducer from './categorySlice';
import logReducer from './logSlice';
import itemReducer from './itemSlice';
import favouriteReducer from './favouriteSlice';
import cartReducer from './cartSlice';
import navigationReducer from './navigationSlice';
import historyReducer from './historySlice';

const persistConfig = {
    key: 'root',
    // version: 1,
    storage: AsyncStorage,
}

const rootReducer = combineReducers({
    category: categoryReducer,
    log: logReducer,
    item: itemReducer,
    favourite: favouriteReducer,
    cart: cartReducer,
    navigation: navigationReducer,
    history: historyReducer
})

const immutableStateInvariant = createImmutableStateInvariantMiddleware({
    ignoredPaths: ['cart.listItem'],
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
        immutableStateInvariant: immutableStateInvariant
    }),
})

// run commented command to turn back store to the initial state

// const purge = persistStore(store).purge()

// purge

export const persistore = persistStore(store)