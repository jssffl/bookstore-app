import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addItemToCart } from '../../store/cart/cart.slice'
import CustomButton from '../UI/button.component'
import axios from 'axios'
import {
  BookItemWrap,
  ItemInfo,
  ItemImg,
  ItemCheckout,
  ItemPrice,
  SalePrice,
  ListPrice,
  ButtonWrap,
  FullStar,
  HalfStar,
} from './book-item.styles'
import { useState, useEffect } from 'react'
const defaultRatingField = { rating: '', ratingsCount: '' }

const BookItem = (props) => {
  const { image, title, author, price, publicationDate, description, isbn } =
    props.item
  const [ratingField, setRatingField] = useState(defaultRatingField)
  const { rating, ratingsCount } = ratingField
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchRatings = async () => {
      const res = await axios.get(
        `/.netlify/functions/get-book-ratings?isbn=${isbn}`
      )

      const { work_ratings_count, average_rating } = res.data.data.books[0]

      setRatingField({
        rating: average_rating,
        ratingsCount: work_ratings_count,
      })
    }

    fetchRatings()
  }, [])

  const addCartHandler = () => dispatch(addItemToCart(props.item))

  return (
    <BookItemWrap>
      <ItemImg>
        <img alt={title} src={image} />
      </ItemImg>
      <ItemInfo>
        <h2>{title}</h2>
        <div>
          <span>by {author}</span>
        </div>
        <FullStar />
        <HalfStar />
        {/* <span> {publicationDate}</span> */}
        {rating && ratingsCount && <span>{rating} </span>}
        {rating && ratingsCount && (
          <span>
            (
            {ratingsCount
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') + ' '}
            ratings by Goodreads)
          </span>
        )}
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
