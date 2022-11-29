import { useState } from 'react'
import UserNav from './user-nav.component'
import { Burger, Menu, MenuButton, NavBarWrap } from './navbar.styles'
import ShopNav from './shop-nav.component'

const NavBar = (props) => {
  const { isMenuOpen } = props
  const [active, setActive] = useState('shop')
  const onToggleMenu = () => {
    props.toggleMenu()
  }

  return (
    <NavBarWrap>
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
    </NavBarWrap>
  )
}

export default NavBar
