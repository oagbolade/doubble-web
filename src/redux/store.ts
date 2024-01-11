import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer } from 'redux-persist'
import rootReducer from './rootReducer';

const persistConfig = {
    key: 'root',
    storage: storageSession,
    whitelist: ["auth","otp","settings","investment"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
