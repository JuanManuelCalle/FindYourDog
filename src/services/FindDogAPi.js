import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../firebase/database'

// Crear una API utilizando Redux Toolkit Query
export const ecApi = createApi({
    reducerPath: "EcApi", // Nombre del slice en el estado de Redux
    baseQuery: fetchBaseQuery({
        baseUrl: base_url, // URL base para las solicitudes HTTP
    }),
    endpoints: (builder) => ({
        // Definición de puntos finales de la API
        getDogs: builder.query({
            // Consulta para obtener datos de las mascotas perdidas
            query: () => "dogs.json", // URL para la consulta
        }),
        getImage: builder.query({
            // Consulta para obtener imágenes
            query: () => "image.json", // URL para la consulta de imágenes
        }),

        putImage: builder.mutation({
            // Mutación para cargar una imagen en la base de datos
            query: (image) => ({
                url: "image.json", // URL para la mutación
                method: "PUT", // Método HTTP utilizado (PUT)
                body: image, // Datos de la imagen a cargar
            })
        })
    })
})

// Exportar funciones generadas para usar los puntos finales de la API
export const { useGetDogsQuery, usePutImageMutation, useGetImageQuery } = ecApi;
