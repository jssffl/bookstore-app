import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import { combineReducers } from 'redux'
import { userReducer } from './user/user.slice'
import { booksReducer } from './books/books.slice'
import { cartReducer } from './cart/cart.slice'
import logger from 'redux-logger'

export const rootReducer = combineReducers({
  user: userReducer,
  books: booksReducer,
  cart: cartReducer,
})

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let middleWares

if (process.env.NODE_ENV !== 'production') {
  middleWares = (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger)
} else {
  middleWares = (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,
})

export const persistor = persistStore(store)
