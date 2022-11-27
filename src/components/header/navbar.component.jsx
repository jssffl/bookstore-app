import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Burger,
  Menu,
  MenuButton,
  ShopMenu,
  AccountMenu,
  ToggleLabel,
  Dropdown,
} from './navbar.styles'

const NavBar = (props) => {
  const [active, setActive] = useState('shop')
  const onToggleMenu = () => {
    props.toggleMenu()
  }

  return (
    <>
      <Burger open={props.isMenuOpen} onClick={onToggleMenu}>
        <span />
      </Burger>
      <Menu open={props.isMenuOpen}>
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
        <ShopMenu active={active === 'shop'}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <input type='checkbox' id='categories' />
            <ToggleLabel htmlFor='categories'>Categories</ToggleLabel>
            <Dropdown>
              <li>
                <Link to='/shop/life'>Life</Link>
              </li>
            </Dropdown>
          </li>
          <li>
            <input type='checkbox' id='bestsellers' />
            <ToggleLabel htmlFor='bestsellers'>Bestsellers</ToggleLabel>
            <Dropdown>
              <li>
                <Link to='/shop?lab=jingyong'>Jing Yong</Link>
                <Link to='/shop?lab=harrypotter'>Harry Potter</Link>
              </li>
            </Dropdown>
          </li>
          <li>
            <input type='checkbox' id='booksbylanguage' />
            <ToggleLabel htmlFor='booksbylanguage'>
              Books By Language
            </ToggleLabel>
            <Dropdown>
              <li>
                <Link to='/shop?lang=EN'>English</Link>
                <Link to='/shop?lang=CH'>Chinese</Link>
              </li>
            </Dropdown>
          </li>
          <li>
            <Link to='/'>News Releases</Link>
          </li>
        </ShopMenu>
        <AccountMenu active={active === 'account'}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/'>Order status</Link>
          </li>
          <li>
            <Link to='/'>Sign in</Link>
          </li>
          <li>
            <Link to='/'>Sign out</Link>
          </li>

          <li>
            <Link to='/'>Help</Link>
          </li>
        </AccountMenu>
      </Menu>
    </>
  )
}

export default NavBar
