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
  const navigateToBookPage = (book) => {
    navigate(`/shop//${id}`)
  }

  return (
    <BookCardWrap onClick={() => navigateToBookPage}>
      <ImgWrap>
        <img src={image} alt={title} />
      </ImgWrap>
      <InfoWrap>
        <h3>{title}</h3>
        <AuthorWrap>by {author}</AuthorWrap>
        <PriceWrap>US$ {price}</PriceWrap>
      </InfoWrap>

      <CustomButton buttonType='add' onClick={addCartHandler}>
        Add To Cart
      </CustomButton>
    </BookCardWrap>
  )
}

export default BookCard
