import { EmptyCartWrap, Message, ButtonWrap } from './empty-cart.styles'
import CustomButton from '../UI/button.component'
import { useNavigate } from 'react-router-dom'
const EmptyCart = () => {
  const navigate = useNavigate()
  return (
    <EmptyCartWrap>
      <h2>Your cart is empty</h2>
      <Message>
        <h3>Still wondering what to buy?</h3>
        <p>Explore our bestsellers to find your favorite books!</p>
        <ButtonWrap>
          <CustomButton
            onClick={() => {
              navigate('/bestsellers')
            }}
            buttonType='add'
          >
            Browser Bestsellers
          </CustomButton>
          <CustomButton
            onClick={() => {
              navigate('/')
            }}
          >
            Continue shopping
          </CustomButton>
        </ButtonWrap>
      </Message>
    </EmptyCartWrap>
  )
}

export default EmptyCart
