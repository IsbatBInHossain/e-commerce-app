import { configureStore } from '@reduxjs/toolkit'
import { storeApi } from './features/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import categoryReducer from './features/categorySlice'

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    [storeApi.reducerPath]: storeApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(storeApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
