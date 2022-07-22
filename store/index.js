
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session';
import auth from "./auth";


const rootPersistConfig = {
    key: 'root',
    storage,
}

const authPersistConfig = {
    key: 'auth',
    storage: storageSession,
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, auth),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store
