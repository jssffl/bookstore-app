import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer/footer.component'
import Header from '../../components/header/header.component'
import { Container } from './main-layout.styles'

const MainLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = (isMenuOpen) => {
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <Container isMenuOpen={isMenuOpen}>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      <Outlet />

      <Footer />
    </Container>
  )
}

export default MainLayout
