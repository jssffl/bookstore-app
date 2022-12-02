import PaymentForm from '../../components/payment-form/payment-form.component'
import { useSelector } from 'react-redux'
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector'
import {
  Banner,
  PaymentInfo,
  OrderInfo,
  CheckoutWrap,
  UserInfo,
  Title,
  Total,
  Summary,
} from './checkout.styles'
import { BlockWrap } from '../../components/UI/block-wrap.styles'

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  return (
    <CheckoutWrap>
      <PaymentInfo>
        <Banner>
          <p>Payment details</p>
        </Banner>

        <BlockWrap>
          <UserInfo>
            <h2>Please fill in your details</h2>
            <div>
              <label>Full name</label>
              <input type='text' required />
            </div>
            <div>
              <label>Email address</label>
              <input type='email' required />
            </div>
            <div>
              <label>Recipient's phone number</label>
              <input type='text' required />
            </div>
            <div>
              <label> Delivery Address</label>
              <input type='text' required />
            </div>
          </UserInfo>
        </BlockWrap>
        <BlockWrap>
          <PaymentForm />
        </BlockWrap>
      </PaymentInfo>
      <OrderInfo>
        <h2>Order Summary</h2>
        {cartItems.map(({ id, title, price, quantity }) => (
          <dl key={id}>
            <dt>
              <Title>{title}</Title>
              <span>x{quantity}</span>
            </dt>
            <dd>US${quantity * price}</dd>
          </dl>
        ))}
        <Summary>
          <dl>
            <dt>Sub-total</dt>
            <dd>US${cartTotal}</dd>
          </dl>

          <dl>
            <dt>Delivery</dt>
            <dd>FREE</dd>
          </dl>

          <dl>
            <dt>Total</dt>
            <Total>US${cartTotal}</Total>
          </dl>
        </Summary>
      </OrderInfo>
    </CheckoutWrap>
  )
}

export default Checkout
