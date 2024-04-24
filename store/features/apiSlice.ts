import { ProductType } from '@/type'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const storeApi = createApi({
  reducerPath: 'store',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: builder => ({
    getAllProducts: builder.query<ProductType[], string>({
      query: () => `products`,
    }),
    getCategories: builder.query<string[], string>({
      query: () => 'products/categories',
    }),
  }),
})

export const { useGetAllProductsQuery, useGetCategoriesQuery } = storeApi
