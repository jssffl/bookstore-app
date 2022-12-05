import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCollectionAndDocuments } from '../../utils/firebase/firebase.utils'

export const initialState = {
  books: [],
  isLoading: false,
  error: null,
}

export const fetchBooksAsync = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    return await getCollectionAndDocuments('books')
  }
)

const addBookRating = (books, productToAdd) => {
  return books.map((item) =>
    item.isbn === productToAdd.isbn
      ? {
          ...item,
          rating: productToAdd.rating,
          ratingsCount: productToAdd.ratingsCount,
        }
      : item
  )
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addRatingToBook: (state, { payload }) => {
      const newBooks = addBookRating(state.books[0]['items'], payload)
      state.books[0]['items'] = newBooks
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.pending, (state, action) => {
        state.isLoading = true
      })

      .addCase(fetchBooksAsync.fulfilled, (state, { payload }) => {
        state.books = payload
        state.isLoading = false
      })

      .addCase(fetchBooksAsync.rejected, (state, { error }) => {
        const { message } = error
        state.error = message
        state.isLoading = false
      })
  },
})

export const booksReducer = booksSlice.reducer
export const { addRatingToBook } = booksSlice.actions
