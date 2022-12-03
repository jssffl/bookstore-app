import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import BookCard from '../../components/book/book-card.component'

import BaseBanner from '../../components/UI/base-banner.component'
import {
  selectBestsellers,
  selectFetchBooksIsLoading,
} from '../../store/books/books.selector'
import { ProductsWrap, ContentWrap, BannerTitle } from './book-shop.styles.'
import Spinner from '../../components/UI/spinner.component'
const BookBestsellers = () => {
  const bookBestsellers = useSelector(selectBestsellers)
  const [products, setProducts] = useState(bookBestsellers)
  const isLoading = useSelector(selectFetchBooksIsLoading)
  useEffect(() => {
    setProducts(bookBestsellers)
  }, [bookBestsellers])

  return (
    <>
      {isLoading ? (
        <Spinner fullWidth={true} />
      ) : (
        <>
          <ContentWrap>
            <BaseBanner>
              <BannerTitle>Bestsellers</BannerTitle>
            </BaseBanner>
            <ProductsWrap>
              {products &&
                products.map((item) => <BookCard item={item} key={item.id} />)}
            </ProductsWrap>
          </ContentWrap>
        </>
      )}
    </>
  )
}

export default BookBestsellers
