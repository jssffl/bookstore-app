import { configureStore } from '@reduxjs/toolkit'
import { combineReducers, applyMiddleware } from 'redux'
import { userReducer } from './user/user.slice'
import { booksReducer } from './books/books.slice'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

export const reducers = combineReducers({
  user: userReducer,
  books: booksReducer,
  //   cart: cartReducer,
})

const middlewares = [
  process.env.NODE_ENV !== 'production' && logger,
  thunk,
].filter(Boolean)

export const store = configureStore({
  reducer: reducers,
  middleware: middlewares,
})
