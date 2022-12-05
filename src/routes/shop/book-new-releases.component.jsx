import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import BookCard from '../../components/book/book-card.component'

import BaseBanner from '../../components/UI/base-banner.component'
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
        <BaseBanner>
          <BannerTitle>News Releases</BannerTitle>
        </BaseBanner>
        <ProductsWrap>
          {products &&
            products.map((item) => <BookCard item={item} key={item.id} />)}
        </ProductsWrap>
      </ContentWrap>
    </>
  )
}

export default BookNewReleases
