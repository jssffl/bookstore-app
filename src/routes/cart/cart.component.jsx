import { useSelector } from 'react-redux'
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector'
import CartItem from '../../components/cart/cart-item.component'

import {
  CartContainer,
  EmptyCart,
  Message,
  Total,
  ButtonWrap,
} from './cart.styles'
import CustomButton from '../../components/UI/button.component'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  const navigate = useNavigate()
  return (
    <>
      {cartItems && cartItems.length === 0 && (
        <>
          <EmptyCart>
            <h2>Your cart is empty</h2>
            <Message>
              <h3>Still wondering what to buy?</h3>
              <p>Explore our bestsellers to find your favorite books!</p>
              <CustomButton
                onClick={() => {
                  navigate('/bestsellers')
                }}
                buttonType='add'
              >
                Browser Bestsellers
              </CustomButton>
            </Message>

            <ButtonWrap>
              <CustomButton
                onClick={() => {
                  navigate('/')
                }}
              >
                Continue shopping
              </CustomButton>
            </ButtonWrap>
          </EmptyCart>
        </>
      )}
      {cartItems && cartItems.length > 0 && (
        <CartContainer>
          <h1>Shopping Cart</h1>

          {cartItems.map((cartItem) => (
            <CartItem cartItem={cartItem} key={cartItem.id} />
          ))}
        </CartContainer>
      )}
      {cartItems && cartItems.length > 0 && (
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
      )}
    </>
  )
}

export default Cart
