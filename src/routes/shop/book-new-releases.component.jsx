import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import BookCard from '../../components/book/book-card.component'

import { selectNewReleases } from '../../store/books/books.selector'
import { ContentWrap, ProductsWrap, BannerTitle } from './book-shop.styles.'

const BookNewReleases = () => {
  const bookNewReleases = useSelector(selectNewReleases)
  const [products, setProducts] = useState(bookNewReleases)

  useEffect(() => {
    setProducts(bookNewReleases)
  }, [bookNewReleases])

  return (
    <>
      <ContentWrap>
        <BannerTitle show={true}>News Releases</BannerTitle>

        <ProductsWrap>
          {products &&
            products.map((item) => <BookCard key={item.id} item={item} />)}
        </ProductsWrap>
      </ContentWrap>
    </>
  )
}

export default BookNewReleases
