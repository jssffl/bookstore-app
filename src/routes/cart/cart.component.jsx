import { useSelector } from 'react-redux'
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector'
import CartItem from '../../components/cart/cart-item.component'
import PaymentForm from '../../components/payment-form/payment-form.component'
import { CartContainer, Total } from './cart.styles'

const Cart = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

  return (
    <>
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
        <PaymentForm />
      </Total>
    </>
  )
}

export default Cart
