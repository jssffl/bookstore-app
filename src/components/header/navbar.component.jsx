import { useState } from 'react'
import { Link } from 'react-router-dom'
import UserNav from './user-nav.component'
import { Burger, Menu, MenuButton, SideBar } from './navbar.styles'
import ShopNav from './shop-nav.component'

const NavBar = (props) => {
  const { isMenuOpen } = props
  const [active, setActive] = useState('shop')
  const onToggleMenu = () => {
    props.toggleMenu()
  }

  return (
    <SideBar>
      <Burger open={isMenuOpen} onClick={onToggleMenu}>
        <span />
      </Burger>
      <Menu open={isMenuOpen}>
        <div>
          <MenuButton
            active={active === 'shop'}
            onClick={() => setActive('shop')}
          >
            Shop
          </MenuButton>
          <MenuButton
            active={active === 'account'}
            onClick={() => setActive('account')}
          >
            Account
          </MenuButton>
        </div>

        {active === 'shop' && <ShopNav />}
        {active === 'account' && <UserNav />}
      </Menu>
    </SideBar>
  )
}

export default NavBar
