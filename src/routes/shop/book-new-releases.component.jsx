import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import BookCard from '../../components/book/book-card.component'

import BaseBanner from '../../components/UI/base-banner.component'
import {
  selectNewReleases,
  selectFetchBooksIsLoading,
} from '../../store/books/books.selector'
import { ContentWrap, ProductsWrap, BannerTitle } from './book-shop.styles.'
import Spinner from '../../components/UI/spinner.component'
const BookNewReleases = () => {
  const bookNewReleases = useSelector(selectNewReleases)
  const [products, setProducts] = useState(bookNewReleases)
  const isLoading = useSelector(selectFetchBooksIsLoading)
  useEffect(() => {
    setProducts(bookNewReleases)
  }, [bookNewReleases])

  return (
    <>
      {isLoading ? (
        <Spinner fullWidth={true} />
      ) : (
        <>
          <ContentWrap>
            <BaseBanner>
              <BannerTitle>News Releases</BannerTitle>
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

export default BookNewReleases
