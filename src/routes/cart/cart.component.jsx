import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector'
import CustomButton from '../../components/UI/button.component'
import CartItem from '../../components/cart/cart-item.component'
import EmptyCart from '../../components/cart/empty-cart.component'
import { CartContainer, CartWrap, Total } from './cart.styles'

const Cart = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  const navigate = useNavigate()

  return (
    <>
      {cartItems && cartItems.length === 0 && <EmptyCart />}
      {cartItems && cartItems.length > 0 && (
        <CartWrap>
          <CartContainer>
            <h1>Shopping Cart</h1>
            {cartItems.map((cartItem) => (
              <CartItem cartItem={cartItem} key={cartItem.id} />
            ))}
          </CartContainer>
          <Total>
            <dl>
              <dt>Delivery Cost</dt>
              <dd>FREE</dd>
            </dl>
            <dl>
              <dt>Total</dt>
              <dd>${cartTotal}</dd>
            </dl>
            <CustomButton
              onClick={() => {
                navigate('/cart/checkout')
              }}
              buttonType='add'
            >
              Checkout
            </CustomButton>
          </Total>
        </CartWrap>
      )}
    </>
  )
}

export default Cart
