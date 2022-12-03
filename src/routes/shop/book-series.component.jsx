import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BookCard from '../../components/book/book-card.component'
import SideBarWrap from '../../components/UI/sidebar.component'
import MainContentWrap from '../../components/UI/main-content.component'
import BaseBanner from '../../components/UI/base-banner.component'
import {
  selectSeries,
  selectFetchBooksIsLoading,
} from '../../store/books/books.selector'
import {
  ProductsWrap,
  Sidebar,
  Heading,
  BaseLink,
  BannerTitle,
} from './book-shop.styles.'
import { ReactComponent as ChevronRight } from '../../assets/chevron-left.svg'
import Spinner from '../../components/UI/spinner.component'
const BookSeries = () => {
  const { series } = useParams()
  const bookSeries = useSelector(selectSeries)
  const [products, setProducts] = useState(bookSeries[series])
  const isLoading = useSelector(selectFetchBooksIsLoading)
  useEffect(() => {
    setProducts(bookSeries[series])
  }, [series, bookSeries])

  return (
    <>
      {isLoading ? (
        <Spinner fullWidth={true} />
      ) : (
        <>
          <SideBarWrap>
            <Sidebar>
              <Heading to='/'>
                <ChevronRight width='25' heigh='20' fill='#444' />
                <h3>Back to Homepage</h3>
              </Heading>
              <ul>
                {bookSeries &&
                  Object.keys(bookSeries).map((title) => (
                    <li key={title}>
                      <BaseLink
                        to={'/series/' + title}
                        active={title === series}
                      >
                        {title.split('-').join(' ')}
                      </BaseLink>
                    </li>
                  ))}
              </ul>
            </Sidebar>
          </SideBarWrap>
          <MainContentWrap>
            <BaseBanner>
              <BannerTitle>{series.split('-').join(' ')}</BannerTitle>
            </BaseBanner>
            <ProductsWrap>
              {products &&
                products.map((item) => <BookCard item={item} key={item.id} />)}
            </ProductsWrap>
          </MainContentWrap>
        </>
      )}
    </>
  )
}

export default BookSeries
