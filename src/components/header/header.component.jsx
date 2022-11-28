import NavBar from './navbar.component'
import {
  PrimaryWrap,
  PrimaryContainer,
  LogoContainer,
  TheHeader,
  UserNavWrap,
  UserNavContainer,
  ShopNavWrap,
  ShopNavContainer,
  PromotionBannerWrap,
} from './header.styles'

import UserNav from './user-nav.component'
import ShopNav from './shop-nav.component'

import SearchForm from './search-form.component'
import PromotionBanner from './promotion-banner.component'

import logo from '../../assets/logo.png'

const Header = (props) => {
  const { isMenuOpen, toggleMenu } = props
  return (
    <>
      <TheHeader>
        {/* <AccountNav /> */}

        <UserNavWrap>
          <UserNavContainer>
            <UserNav />
          </UserNavContainer>
        </UserNavWrap>
        <PrimaryWrap>
          <PrimaryContainer>
            <LogoContainer to='/'>
              <img src={logo} alt='log' />
              <h1>Bookstore</h1>
            </LogoContainer>
            <SearchForm />
          </PrimaryContainer>
        </PrimaryWrap>
        <ShopNavWrap>
          <ShopNavContainer>
            <ShopNav />
          </ShopNavContainer>
        </ShopNavWrap>

        <PromotionBannerWrap>
          <PromotionBanner />
        </PromotionBannerWrap>
      </TheHeader>
      <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  )
}

export default Header
