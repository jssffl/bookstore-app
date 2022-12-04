import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { addItemToCart } from '../../store/cart/cart.slice'
import CustomButton from '../UI/button.component'

import {
  BookItemWrap,
  ItemInfo,
  ItemImg,
  ItemCheckout,
  ItemPrice,
  SalePrice,
  ListPrice,
  ButtonWrap,
} from './book-item.styles'

const BookItem = (props) => {
  const { image, title, author, price, publicationDate, description } =
    props.item

  const dispatch = useDispatch()

  const addCartHandler = () => dispatch(addItemToCart(props.item))
  const navigate = useNavigate()
  return (
    <BookItemWrap>
      <ItemImg>
        <img alt={title} src={image} />
      </ItemImg>
      <ItemInfo>
        <h2>{title}</h2>
        <span>by {author}</span>
        <span> {publicationDate}</span>

        <p> {description}</p>
      </ItemInfo>
      <ItemCheckout>
        <ItemPrice>
          <SalePrice>${price}</SalePrice>
          <span>List Price: </span>{' '}
          <ListPrice>${(price / 0.9).toFixed(2)}</ListPrice>
        </ItemPrice>

        <p>
          <b>FREE delivery worldwide </b>
        </p>

        <p>Expected delivery to Taiwan in 9-14 business days.</p>
        <ButtonWrap>
          <CustomButton onClick={addCartHandler} buttonType='base'>
            Add to Cart
          </CustomButton>
          <CustomButton onClick={() => navigate('/cart')} buttonType='add'>
            Buy Now
          </CustomButton>
        </ButtonWrap>
      </ItemCheckout>
    </BookItemWrap>
  )
}

export default BookItem
