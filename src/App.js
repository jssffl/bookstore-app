import { Route, Routes } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import { GlobalStyle } from './global.styles'
import Spinner from './components/UI/spinner.component'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from './store/user/user.slice'

import Home from './routes/home/home.component'
import MainLayout from './routes/main-layout/main-layout.component'
import Authentication from './routes/auth/login.component'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from './utils/firebase/firebase.utils'

import { fetchBooksAsync } from './store/books/books.slice'
import BookCategory from './routes/shop/book-category.component'
import BookBestsellers from './routes/shop/book-bestsellers.components'
import BookSeries from './routes/shop/book-series.component'
import BookLanguage from './routes/shop/book-language.component'
import Cart from './routes/cart/cart.component.jsx'
import Checkout from './routes/cart/checkout.component'
import BookNewReleases from './routes/shop/book-new-releases.component'
import Account from './routes/auth/account.component'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      dispatch(setCurrentUser(user))
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    dispatch(fetchBooksAsync())
  }, [])

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='account' element={<Account />} />
          <Route path='/account/login' element={<Authentication />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/cart/checkout' element={<Checkout />} />
          <Route path='/bestsellers' element={<BookBestsellers />} />
          <Route path='/new-releases' element={<BookNewReleases />} />
          <Route path='/shop/:bookId' element={<Home />} />
          <Route path='/lang/:lang' element={<BookLanguage />} />
          <Route path='/series/:series' element={<BookSeries />} />
          <Route path='/category/:category' element={<BookCategory />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
