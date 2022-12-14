import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import CustomButton from '../UI/button.component'
import Spinner from '../../components/UI/spinner.component'

import {
  BookItemWrap,
  ItemImg,
  ItemCheckout,
  ItemPrice,
  SalePrice,
  ListPrice,
  ButtonWrap,
  FullStar,
  HalfStar,
  StarWrap,
  MetaInfo,
  CheckoutInfo,
  ItemDetails,
  ItemDescription,
  ItemTitle,
  BlockTitle,
  RatingWrap,
} from './book-item.styles'

import { addItemToCart } from '../../store/cart/cart.slice'
import { selectBooks } from '../../store/books/books.selector'

const defaultRatings = {
  rating: '',
  ratingsCount: '',
}

const BookItem = () => {
  const { bookIsbn } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const books = useSelector(selectBooks)
  const [bookItem, setBookItem] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [ratings, setRatings] = useState(defaultRatings)
  const { rating, ratingsCount } = ratings
  const [didFetch, setDidFetch] = useState(false)
  const fetchData = useCallback(() => {
    const fetchRating = async () => {
      if (!bookIsbn) return

      const res = await axios.get(
        `/.netlify/functions/get-book-ratings?isbn=${bookIsbn}`
      )
      setDidFetch(true)

      if (res.status !== 200) return

      const { work_ratings_count, average_rating } = res.data.books[0]

      setRatings({
        rating: average_rating,
        ratingsCount: work_ratings_count,
      })
    }

    fetchRating()
  }, [bookIsbn])

  const selectBook = useCallback(() => {
    const findBook = books && books.find((book) => book.isbn === bookIsbn)
    setBookItem(findBook)
    setIsLoading(false)
  }, [books, bookIsbn])

  useEffect(() => {
    try {
      fetchData()
    } catch (err) {
      ///
    }

    selectBook()
  }, [fetchData, selectBook])

  const addCartHandler = () => dispatch(addItemToCart(bookItem))

  let ratingIdx = Number(rating) + 1

  return (
    <>
      {isLoading || !bookItem ? (
        <Spinner fullWidth={true} />
      ) : (
        <BookItemWrap>
          <ItemTitle>
            <h2>{bookItem.title}</h2>
          </ItemTitle>
          <ItemImg>
            <img alt={bookItem.title} src={bookItem.image} />
          </ItemImg>
          <MetaInfo>
            {didFetch && !rating && <p>&#40;No ratings by Goodreads&#41;</p>}

            {didFetch && rating && (
              <StarWrap>
                {Array.from(Array(Math.ceil(rating)).keys()).map((_, index) => {
                  ratingIdx--
                  if (ratingIdx < 1) {
                    return <HalfStar key={index} />
                  } else {
                    return <FullStar key={index} />
                  }
                })}
                <span>{rating}&nbsp;</span>
                <RatingWrap>
                  <span>
                    &#40;
                    {ratingsCount
                      .toString()
                      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                    &nbsp;
                  </span>
                  <span>ratings by Goodreads&#41;</span>
                </RatingWrap>
              </StarWrap>
            )}

            <p>
              Paperback &nbsp; | <span>&nbsp;{bookItem.language}</span>
            </p>
            <p>By {bookItem.author}</p>
          </MetaInfo>
          <ItemDescription>
            <BlockTitle isVisible={true}>Description</BlockTitle>
            <p> {bookItem.description}</p>
          </ItemDescription>

          <ItemCheckout>
            <ItemPrice>
              <SalePrice>${bookItem.price}</SalePrice>
              <span>List Price: </span>{' '}
              <ListPrice>${(bookItem.price / 0.9).toFixed(2)}</ListPrice>
            </ItemPrice>
            <CheckoutInfo>
              <p>
                <b>FREE delivery worldwide </b>
              </p>
              <p>Expected delivery to Taiwan in 9-14 business days.</p>
            </CheckoutInfo>
            <ButtonWrap>
              <CustomButton onClick={addCartHandler} buttonType='base'>
                Add to Cart
              </CustomButton>
              <CustomButton onClick={() => navigate('/cart')} buttonType='add'>
                Buy Now
              </CustomButton>
            </ButtonWrap>
          </ItemCheckout>
          <ItemDetails>
            <BlockTitle>Product details</BlockTitle>
            <ul>
              <li>
                <label>Category:</label> <span>{bookItem.category}</span>
              </li>
              <li>
                <label>Format:</label> <span>Paperback | 736 pages</span>
              </li>
              <li>
                <label>Dimensions:</label> <span>130 x 198 x 43mm | 508g</span>
              </li>
              <li>
                <label>Language:</label>
                <span> {bookItem.language}</span>
              </li>
              <li>
                <label>Publication date:</label>{' '}
                <span>{bookItem.publicationDate}</span>
              </li>
              <li>
                <label>ISBN10:</label>
                <span> {bookItem.isbn}</span>
              </li>
            </ul>
          </ItemDetails>
        </BookItemWrap>
      )}
    </>
  )
}

export default BookItem
