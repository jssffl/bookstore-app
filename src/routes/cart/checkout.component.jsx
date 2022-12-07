import { useSelector } from 'react-redux'
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector'
import PaymentForm from '../../components/payment-form/payment-form.component'
import { BlockWrap } from '../../components/UI/block-wrap.styles'
import {
  Banner,
  PaymentInfo,
  OrderInfo,
  CheckoutWrap,
  UserInfo,
  Title,
  Total,
  Summary,
  MobileSummary,
  OrderWrap,
  MobileDropDown,
  MobileToggleDropdown,
} from './checkout.styles'

import { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)
  const cartCount = useSelector(selectCartCount)

  const [stripePromise, setStripePromise] = useState(null)
  useEffect(() => {
    setStripePromise(
      loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`)
    )
  }, [])
  const [open, setOpen] = useState(false)

  return (
    <CheckoutWrap>
      <PaymentInfo>
        <Banner>
          <p>Payment details</p>
        </Banner>

        <MobileSummary>
          <MobileToggleDropdown
            open={open}
            onClick={() => setOpen((preState) => !preState)}
          >
            Order Summary: {cartCount} items US${cartTotal}
          </MobileToggleDropdown>
          <MobileDropDown open={open}>
            {cartItems.map(({ id, title, price, quantity }) => (
              <dl key={id}>
                <dt>
                  <Title>{title}</Title>
                  <span>x{quantity}</span>
                </dt>
                <dd>US${Number(quantity * price).toFixed(2)}</dd>
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
          </MobileDropDown>
        </MobileSummary>

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
          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </BlockWrap>
      </PaymentInfo>
      <OrderWrap>
        <OrderInfo>
          <h2>Order Summary</h2>
          {cartItems.map(({ id, title, price, quantity }) => (
            <dl key={id}>
              <dt>
                <Title>{title}</Title>
                <span>x{quantity}</span>
              </dt>
              <dd>US${Number(quantity * price).toFixed(2)}</dd>
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
      </OrderWrap>
    </CheckoutWrap>
  )
}

export default Checkout
