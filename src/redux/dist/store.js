"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var session_1 = require("redux-persist/lib/storage/session");
var redux_persist_1 = require("redux-persist");
var rootReducer_1 = require("./rootReducer");
var persistConfig = {
    key: 'root',
    storage: session_1["default"],
    whitelist: ["auth", "otp", "settings", "investment"]
};
var persistedReducer = redux_persist_1.persistReducer(persistConfig, rootReducer_1["default"]);
exports.store = toolkit_1.configureStore({
    reducer: persistedReducer,
    middleware: toolkit_1.getDefaultMiddleware({
        serializableCheck: false
    })
});
