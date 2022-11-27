import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import NavBar from './navbar.component'
import { Container } from './header.styles'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = (isMenuOpen) => {
    setIsMenuOpen((prevState) => !prevState)
  }
  return (
    <Container isMenuOpen={isMenuOpen}>
      <header>header</header>

      <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main>
        <Outlet />
      </main>
    </Container>
  )
}

export default Header
