import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  SubDropdown,
  ShopMenu,
  ToggleSubDropdown,
  ToggleDropDown,
  Dropdown,
} from './shop-nav.styles'
import { useSelector } from 'react-redux'
import { selectBooks, selectCategories } from '../../store/books/books.selector'

const ShopNav = () => {
  const [categoriesList, setCategoriesList] = useState(false)
  const [bestsellingList, setBestsellingList] = useState(false)
  const [booksbylangList, setBooksbylangList] = useState(false)
  const [hoverSpan, setHoverSpan] = useState(false)
  const [hoverDropdown, setHoverDropdown] = useState(false)
  const [deviceSize, setDeviceSize] = useState(window.innerWidth)

  const hoverEnterSpanHandler = () => {
    console.log(deviceSize)
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

  useEffect(() => {
    function handleWindowResize() {
      setDeviceSize(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  const categories = useSelector(selectCategories)

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
                {categories &&
                  Object.keys(categories).map((title) => (
                    <Link key={title} to={title}>
                      {title}
                    </Link>
                  ))}
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
