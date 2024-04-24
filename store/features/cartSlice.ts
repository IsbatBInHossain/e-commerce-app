import { createSlice } from '@reduxjs/toolkit'

interface CartState {
  value: number
}

const initialState: CartState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: state => {
      state.value += 1
    },
  },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
