import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
    name: "favorites",
    initialState: [],
    reducers: {
        TogleFavorites: (state, { payload: carId }) => {
            const isExist = state.some(id => id === carId)
            if (isExist) {
                const index = state.findIndex(id => id === carId)
                state.splice(index, 1)
            }
            else {
                state.push(carId)
            }
        },

        deleteFavorites: (state) => {
            state.splice(0, state.length)
        }
    }
})

export const { actions, reducer } = favoriteSlice