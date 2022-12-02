import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  SubDropdown,
  ShopMenu,
  ToggleSubDropdown,
  ToggleDropDown,
  Dropdown,
} from './shop-nav.styles'
import { useSelector } from 'react-redux'
import {
  selectCategories,
  selectSeries,
} from '../../store/books/books.selector'

const ShopNav = () => {
  const [categoriesList, setCategoriesList] = useState(false)
  const [bestsellingList, setBestsellingList] = useState(false)
  const [booksbylangList, setBooksbylangList] = useState(false)
  const [hoverSpan, setHoverSpan] = useState(false)
  const [hoverDropdown, setHoverDropdown] = useState(false)
  const [deviceSize, setDeviceSize] = useState(window.innerWidth)
  const { pathname } = useLocation()
  const categories = useSelector(selectCategories)
  const series = useSelector(selectSeries)

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

  useEffect(() => {
    setHoverSpan(false)
    setHoverDropdown(false)
  }, [pathname])

  useEffect(() => {
    function handleWindowResize() {
      setDeviceSize(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

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
                    <Link key={title} to={'/category/' + title}>
                      {title.split('-').join(' ')}
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
                {series &&
                  Object.keys(series).map((title) => (
                    <Link key={title} to={'/series/' + title}>
                      {title.split('-').join(' ')}
                    </Link>
                  ))}
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
                <Link to='/lang/english'>English</Link>
                <Link to='/lang/chinese'>Chinese</Link>
              </li>
            </SubDropdown>
          </li>
        </Dropdown>
      </li>

      <li>
        <Link to='/new-releases'>New Releases</Link>
        <Link to='/bestsellers'>Bestsellers</Link>
      </li>
    </ShopMenu>
  )
}

export default ShopNav
