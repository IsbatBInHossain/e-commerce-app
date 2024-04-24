import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface CategoryState {
  current: string
}

const initialState: CategoryState = {
  current: 'electronics',
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    updateCategory: (state, action: PayloadAction<string>) => {
      state.current = action.payload
    },
  },
})

export const { updateCategory } = categorySlice.actions

export const selectCategory = (state: RootState) => state.category.current

export default categorySlice.reducer
