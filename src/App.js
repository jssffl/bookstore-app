import { Route, Routes } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import { GlobalStyle } from './global.styles'
import Spinner from './components/UI/spinner.component'
import { useDispatch, useSelector } from 'react-redux'
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
          <Route path='/account/login' element={<Authentication />} />
          <Route path='/bestsellers' element={<BookBestsellers />} />
          <Route path='/:category' element={<BookCategory />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
