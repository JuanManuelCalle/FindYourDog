import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../firebase/database'

export const ecApi = createApi({
    reducerPath: "EcApi",
    baseQuery: fetchBaseQuery({
        baseUrl: base_url
    }),
    endpoints: (builder) => ({
        getDogs: builder.query({
            query: () => "dogs.json",
        }),
        PostDog: builder.mutation({
            query: (form) => ({
                url: "dogs.json",
                method: "POST",
                body: form
            })
        }),

        getImage: builder.query({
            query: () => "image.json"
        }),

        putImage: builder.mutation({
            query: (image) => ({
                url: "image.json",
                method: "PUT",
                body: image,
            })
        })
    })
})

export const {useGetDogsQuery, usePostDogMutation, usePutImageMutation, useGetImageQuery} = ecApi