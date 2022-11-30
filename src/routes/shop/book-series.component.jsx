import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BookCard from '../../components/book/book-card.component'
import SideBarWrap from '../../components/UI/sidebar.component'
import MainContentWrap from '../../components/UI/main-content.component'
import BaseBanner from '../../components/UI/base-banner.component'
import { selectSeries } from '../../store/books/books.selector'
import { ProductsWrap, Sidebar, Heading, BaseLink } from './book-shop.styles.'
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
      <SideBarWrap>
        <Sidebar>
          <Heading to='/'>
            <ChevronRight width='25' heigh='25' />
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
        </Sidebar>
      </SideBarWrap>
      <MainContentWrap>
        <BaseBanner>{series.split('-').join(' ')}</BaseBanner>
        <ProductsWrap>
          {products &&
            products.map((item) => <BookCard item={item} key={item.id} />)}
        </ProductsWrap>
      </MainContentWrap>
    </>
  )
}

export default BookSeries
