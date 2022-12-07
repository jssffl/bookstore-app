import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BookCard from '../../components/book/book-card.component'
import { selectSeries } from '../../store/books/books.selector'
import {
  ProductsWrap,
  ShopSideBar,
  ShopSideBarWrap,
  Heading,
  BaseLink,
  BannerTitle,
  ShopContentWrap,
} from './book-shop.styles.'
import { ReactComponent as ChevronRight } from '../../assets/chevron-left.svg'

const BookSeries = () => {
  const { series } = useParams()
  const bookSeries = useSelector(selectSeries)
  const [products, setProducts] = useState(bookSeries[series])

  useEffect(() => {
    setProducts(bookSeries[series])
  }, [series, bookSeries])

  return (
    <>
      <ShopSideBarWrap>
        <ShopSideBar>
          <Heading to='/'>
            <ChevronRight width='25' heigh='20' fill='#444' />
            <h3>Back to Homepage</h3>
          </Heading>
          <ul>
            {bookSeries &&
              Object.keys(bookSeries).map((title) => (
                <li key={title}>
                  <BaseLink to={'/series/' + title} active={title === series}>
                    {title.split('-').join(' ')}
                  </BaseLink>
                </li>
              ))}
          </ul>
        </ShopSideBar>
      </ShopSideBarWrap>
      <ShopContentWrap>
        <BannerTitle>{series.split('-').join(' ')}</BannerTitle>

        <ProductsWrap>
          {products &&
            products.map((item) => <BookCard item={item} key={item.id} />)}
        </ProductsWrap>
      </ShopContentWrap>
    </>
  )
}

export default BookSeries
