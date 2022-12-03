import { createSelector } from '@reduxjs/toolkit'

export const selectBooks = (state) =>
  state.books && state.books.books[0] && state.books.books[0]['items']

export const selectFetchBooksIsLoading = (state) => state.books.isLoading

export const selectCategories = createSelector([selectBooks], (books) =>
  books
    ? books.reduce((acc, item) => {
        const { category } = item
        acc[category] = acc[category] || []
        acc[category].push(item)

        return acc
      }, {})
    : []
)

export const selectSeries = createSelector([selectBooks], (books) =>
  books
    ? books.reduce((acc, item) => {
        const { series } = item

        if (series) {
          acc[series] = acc[series] || []
          acc[series].push(item)
        }

        return acc
      }, {})
    : []
)

export const selectBestsellers = createSelector([selectBooks], (books) =>
  books ? books.filter((item) => item.bestsellers === true) : []
)

export const selectLanguage = createSelector([selectBooks], (books) =>
  books
    ? books.reduce((acc, item) => {
        const { language } = item

        acc[language] = acc[language] || []
        acc[language].push(item)

        return acc
      }, {})
    : []
)

export const selectNewReleases = createSelector([selectBooks], (books) =>
  books ? books.filter((item) => item.publicationDate.slice(-4) > 2021) : []
)
