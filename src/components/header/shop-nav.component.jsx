import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  SubDropdown,
  ShopMenu,
  ToggleSubDropdown,
  ToggleDropDown,
  Dropdown,
} from './shop-nav.styles'

const ShopNav = () => {
  const [categoriesList, setCategoriesList] = useState(false)
  const [bestsellingList, setBestsellingList] = useState(false)
  const [booksbylangList, setBooksbylangList] = useState(false)
  const [hoverSpan, setHoverSpan] = useState(false)
  const [hoverDropdown, setHoverDropdown] = useState(false)
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth)

  const hoverEnterSpanHandler = () => {
    if (deviceSize < 900) return
    setHoverSpan(true)
  }
  const hoverLeaveSpanHandler = () => {
    if (deviceSize < 900) return
    setHoverSpan(false)
  }
  const hoverEnterDropdownHandler = () => {
    if (deviceSize < 900) return
    setHoverDropdown(true)
  }
  const hoverLeaveDropdownHandler = () => {
    if (deviceSize < 900) return
    setHoverDropdown(false)
  }

  return (
    <ShopMenu>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <ToggleDropDown
          onMouseEnter={hoverEnterSpanHandler}
          onMouseLeave={hoverLeaveSpanHandler}
          hover={hoverSpan || hoverDropdown}
        >
          Shop by Categories
        </ToggleDropDown>
        <Dropdown
          onMouseEnter={hoverEnterDropdownHandler}
          onMouseLeave={hoverLeaveDropdownHandler}
          hover={hoverSpan || hoverDropdown}
        >
          <li>
            <ToggleSubDropdown
              active={categoriesList}
              onClick={() => setCategoriesList((prevState) => !prevState)}
            >
              Categories
            </ToggleSubDropdown>
            <SubDropdown open={categoriesList}>
              <li>
                <Link to='/shop/life'>Life</Link>
              </li>
            </SubDropdown>
          </li>
          <li>
            <ToggleSubDropdown
              active={bestsellingList}
              onClick={() => setBestsellingList((prevState) => !prevState)}
            >
              Bestselling Series
            </ToggleSubDropdown>
            <SubDropdown open={bestsellingList}>
              <li>
                <Link to='/shop?lab=jingyong'>Jing Yong</Link>
                <Link to='/shop?lab=harrypotter'>Harry Potter</Link>
              </li>
            </SubDropdown>
          </li>
          <li>
            <ToggleSubDropdown
              active={booksbylangList}
              onClick={() => setBooksbylangList((prevState) => !prevState)}
            >
              Books By Language
            </ToggleSubDropdown>
            <SubDropdown open={booksbylangList}>
              <li>
                <Link to='/shop?lang=EN'>English</Link>
                <Link to='/shop?lang=CH'>Chinese</Link>
                <Link to='/shop?lang=JP'>Japanese</Link>
              </li>
            </SubDropdown>
          </li>
        </Dropdown>
      </li>

      <li>
        <Link to='/'>News Releases</Link>
        <Link to='/'>Bestsellers</Link>
      </li>
    </ShopMenu>
  )
}

export default ShopNav
