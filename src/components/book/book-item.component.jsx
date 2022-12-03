import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.slice'
import CustomButton from '../UI/button.component'

import { BookItemWrap, InfoWrap, ImgWrap } from './book-item.styles'

const BookItem = (props) => {
  const { image, title, author, price, publicationDate, description } =
    props.item

  const dispatch = useDispatch()

  const addCartHandler = () => dispatch(addItemToCart(props.item))

  return (
    <BookItemWrap>
      <ImgWrap>
        <img alt={title} src={image} />
        <CustomButton onClick={addCartHandler} buttonType='add'>
          Add To Cart
        </CustomButton>
      </ImgWrap>
      <InfoWrap>
        <h2>{title}</h2>
        <span>by {author}</span>
        <span> {publicationDate}</span>
        <h4>${price}</h4>
        <p> {description}</p>
      </InfoWrap>
    </BookItemWrap>
  )
}

export default BookItem
