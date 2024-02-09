import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const URL_API = "http://localhost:3000/"

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: URL_API 
    }),
    endpoints: builder => ({
        getCars: builder.query({
            query: () => `/cars`
        }),

        setUser: builder.mutation({
            query: (body) => ({
                url: "/users",
                body: {...body, id: String(body.id)},
                method: "POST"
            })
        }),
        
        getUserById: builder.query({
            query: (id) => `/users/${ id }`
        }),

        getUsers: builder.query({
            query: () => "/users"
        }),

        getFavoritesById: builder.query({
            query: (id) => `/favorites/${ id }`
        }),

        setFavorites: builder.mutation({
            query: (body) => ({
                url: "/favorites",
                body: {...body, id: String(body.id)},
                method: "POST"
            })
        }),

        updateFavorites: builder.mutation({
            query: (body) => ({
                url: `/favorites/${body.id}`,
                body,
                method: "PUT"
            })
        })
    })
})

export const { useGetCarsQuery, useSetUserMutation, useGetUserByIdQuery, useGetUsersQuery, useGetFavoritesByIdQuery, useSetFavoritesMutation, useUpdateFavoritesMutation } = api