import { useSelector } from 'react-redux'
import { selectCartCount } from '../../store/cart/cart.selector'
import shoppingLogo from '../../assets/shopping-bag.svg'
import { CartIconContainer, ItemCount } from './cart-icon.styles'
import { useNavigate } from 'react-router-dom'

const CartIcon = () => {
  const cartCount = useSelector(selectCartCount)
  const navigate = useNavigate()
  return (
    <CartIconContainer onClick={() => navigate('/cart')}>
      <img src={shoppingLogo} alt='cart' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
