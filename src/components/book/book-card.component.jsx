import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  AuthorWrap,
  BookCardWrap,
  InfoWrap,
  ImgWrap,
  PriceWrap,
} from './book-card.styles'
import CustomButton from '../UI/button.component'
import { selectCartItems } from '../../store/cart/cart.selector'
import { addItemToCart, setIsCartOpen } from '../../store/cart/cart.slice'
import { Link } from 'react-router-dom'
const BookCard = (props) => {
  const { image, title, author, price, id } = props.item
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()

  const addCartHandler = (e) => {
    dispatch(addItemToCart(props.item))
    if (cartItems && cartItems.length === 0) {
      dispatch(setIsCartOpen(true))
    }
  }

  return (
    <BookCardWrap>
      <ImgWrap>
        <Link to={`/shop/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </ImgWrap>
      <InfoWrap>
        <h3>
          <Link to={`/shop/${id}`}>{title}</Link>
        </h3>
        <AuthorWrap>by {author}</AuthorWrap>
        <PriceWrap>US$ {price}</PriceWrap>
      </InfoWrap>

      <CustomButton buttonType='add' onClick={addCartHandler}>
        Add to Cart
      </CustomButton>
    </BookCardWrap>
  )
}

export default BookCard
