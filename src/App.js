import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { GlobalStyle } from './global.styles'
import Spinner from './components/UI/spinner.component'

import Home from './routes/home/home.component'
import MainLayout from './routes/main-layout/main-layout.component'
import Authentication from './routes/auth/login.component'

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/account/login' element={<Authentication />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
