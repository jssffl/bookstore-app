import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { selectCartTotal } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'
import { PaymentButton, Form, ElementWrap } from './payment-form.styles'
import { useNavigate } from 'react-router-dom'
import { resetCart } from '../../store/cart/cart.slice'

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const amount = useSelector(selectCartTotal)
  const currentUser = useSelector(selectCurrentUser)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const paymentHandler = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    if (amount === 0) {
      alert('Your cart is empty')
      return
    }

    setIsProcessingPayment(true)

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json()
    })

    const clientSecret = response.paymentIntent.client_secret

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'client user',
        },
      },
    })

    setIsProcessingPayment(false)

    if (paymentResult.error) {
      alert(paymentResult.error.message)
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful!')
        dispatch(resetCart())
        navigate('/')
      }
    }
  }

  return (
    <Form onSubmit={paymentHandler}>
      <h2>Credit Card Payment</h2>
      <ElementWrap>
        <CardElement />
      </ElementWrap>
      <PaymentButton isLoading={isProcessingPayment} buttonType='add'>
        Pay Now
      </PaymentButton>
    </Form>
  )
}

export default PaymentForm
