import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cart.slice'

import { ReactComponent as GarbageCan } from '../../assets/garbage-trash.svg'
import {
  ImgWrap,
  CartItemWrap,
  PriceWrap,
  QtyButton,
  InfoWrap,
  InfoCheckoutWrap,
  AvailableText,
  MetaInfo,
  Format,
} from './cart-item.styles'

const CartItem = ({ cartItem }) => {
  const { title, image, price, id, quantity, author, language, isbn } = cartItem
  const dispatch = useDispatch()

  const addItemHandler = () => dispatch(addItemToCart(cartItem))
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItem))
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem))

  return (
    <CartItemWrap key={id}>
      <ImgWrap>
        <img src={image} alt={title} />
      </ImgWrap>
      <InfoWrap>
        <h4>
          <Link to={`/shop/${isbn}`}>{title}</Link>
        </h4>
        <MetaInfo>
          <Format>Paperback, {language}</Format>
          <span>{author}</span>
        </MetaInfo>
        <PriceWrap>US${price}</PriceWrap>
        <AvailableText>
          Available. Expected delivery to Taiwan in 15-20 business days.
        </AvailableText>
      </InfoWrap>
      <InfoCheckoutWrap>
        <QtyButton>
          <span onClick={removeItemHandler}>-</span>
          <p>{quantity}</p>
          <span onClick={addItemHandler}>+</span>
        </QtyButton>
        <PriceWrap>US${price * quantity}</PriceWrap>
        <GarbageCan onClick={clearItemHandler} />
      </InfoCheckoutWrap>
    </CartItemWrap>
  )
}

export default CartItem
