import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../../components/footer/footer.component'
import Header from '../../components/header/header.component'
import { Container, ContentWrap } from './main-layout.styles'
import NavBar from '../../components/header/navbar.component'

import { selectFetchBooksIsLoading } from '../../store/books/books.selector'
import { useSelector } from 'react-redux'
import Spinner from '../../components/UI/spinner.component'

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = (isMenuOpen) => setIsMenuOpen((prevState) => !prevState)

  const closeMenu = () => setIsMenuOpen(false)
  const { pathname } = useLocation()
  const isLoading = useSelector(selectFetchBooksIsLoading)

  useEffect(() => {
    closeMenu()
  }, [pathname])

  return (
    <>
      {isLoading ? (
        <Spinner fullWidth='true' />
      ) : (
        <>
          <Container
            isMenuOpen={isMenuOpen}
            onClick={isMenuOpen ? closeMenu : () => {}}
          >
            <Header />
            <ContentWrap>
              <Outlet />
            </ContentWrap>
            <Footer />
          </Container>
          <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </>
      )}
    </>
  )
}

export default MainLayout
