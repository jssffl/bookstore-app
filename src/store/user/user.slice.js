import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
  cartItems: [],
}

export const selectCurrentUser = (state) => state.user.currentUser

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
