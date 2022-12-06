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
  DeskWrap,
} from './header.styles'

import UserNav from './user-nav.component'
import ShopNav from './shop-nav.component'
import SearchForm from './search-form.component'
import PromotionBanner from './promotion-banner.component'

import logo from '../../assets/logo.png'
import CartIcon from '../cart/cart-icon.component'

const Header = () => {
  return (
    <TheHeader id='nav-top'>
      <UserNavWrap>
        <UserNavContainer>
          <DeskWrap>
            <UserNav />
          </DeskWrap>
          <CartIcon />
        </UserNavContainer>
      </UserNavWrap>
      <PrimaryWrap>
        <PrimaryContainer>
          <LogoContainer to='/'>
            <img src={logo} alt='logo' />
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
  )
}

export default Header
