import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
  cartItems: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      state.currentUser = payload
    },
  },
})

export const { setCurrentUser } = userSlice.actions
export const userReducer = userSlice.reducer
