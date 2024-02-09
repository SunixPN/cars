import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "authSlice",
    initialState: { auth: false, data: {} },
    reducers: {
        CreateAccount: (state, { payload: data }) => {
            state.auth = true
            state.data = data
        },
        Exit: (state) => {
            state.auth = false
            state.date = {}
        }
    }
})

export const {actions, reducer} = authSlice