import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import { GlobalStyle } from './global.styles'
import Spinner from './components/UI/spinner.component'
import Header from './components/header/header.component'
import Home from './routes/home/home.component'
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
