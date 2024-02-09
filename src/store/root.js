import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { reducer as favReducer } from "./favorite/favorite.slice"
import { reducer as authReducer } from "./Auth/auth.slice"
import { api } from "../API/api"

const reducer = combineReducers({
    "favReducer": favReducer,
    "authReducer": authReducer,
    [api.reducerPath]: api.reducer,
})

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})