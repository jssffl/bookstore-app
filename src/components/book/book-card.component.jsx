import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CustomButton from '../UI/button.component'
import { addItemToCart } from '../../store/cart/cart.slice'

import {
  AuthorWrap,
  BookCardWrap,
  InfoWrap,
  ImgWrap,
  PriceWrap,
} from './book-card.styles'

const BookCard = (props) => {
  const { image, title, author, price, isbn } = props.item
  const dispatch = useDispatch()

  const addCartHandler = (e) => {
    dispatch(addItemToCart(props.item))
  }

  return (
    <BookCardWrap>
      <ImgWrap>
        <Link to={`/shop/${isbn}`}>
          <img src={image} alt={title} />
        </Link>
      </ImgWrap>
      <InfoWrap>
        <h3>
          <Link to={`/shop/${isbn}`}>{title}</Link>
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
