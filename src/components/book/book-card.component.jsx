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

const BookCard = (props) => {
  const { image, title, author, price, category, id } = props.item
  const dispatch = useDispatch()
  // const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()

  const addCartHandler = (e) => {
    // dispatch(addItemToCart(cartItems, props.item))
    // if (cartItems.length === 0) {
    //   dispatch(setIsCartOpen(true))
    // }
  }

  return (
    <BookCardWrap>
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
