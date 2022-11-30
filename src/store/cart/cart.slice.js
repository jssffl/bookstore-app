import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  cartTotal: 0,
  cartCount: 0,
}

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((item) => item.id === productToAdd.id)
  if (existingItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, productToRemove) => {
  if (productToRemove.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}

export const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, { payload }) => {
      const newCartItems = addCartItem(state.cartItems, payload)
      state.cartItems = newCartItems
    },
    removeItemFromCart: (state, { payload }) => {
      const newCartItems = removeCartItem(state.cartItems, payload)
      state.cartItems = newCartItems
    },
    clearItemFromCart: (state, { payload }) => {
      const newCartItems = clearCartItem(state.cartItems, payload)

      state.cartItems = newCartItems
    },
  },
})

export const {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  setIsCartOpen,
} = cartSlice.actions

export const cartReducer = cartSlice.reducer
