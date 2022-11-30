import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { selectCategories } from '../../store/books/books.selector'
import BookCard from '../../components/book/book-card.component'
import SideBarWrap from '../../components/UI/sidebar.component'
import MainContentWrap from '../../components/UI/main-content.component'
import BaseBanner from '../../components/UI/base-banner.component'

import { ProductsWrap, Sidebar, Heading, BaseLink } from './book-shop.styles.'
import { ReactComponent as ChevronRight } from '../../assets/chevron-left.svg'

const BookCategory = () => {
  const { category } = useParams()
  const bookCategories = useSelector(selectCategories)
  const [products, setProducts] = useState(bookCategories[category])

  useEffect(() => {
    setProducts(bookCategories[category])
  }, [category, bookCategories])

  return (
    <>
      <SideBarWrap>
        <Sidebar>
          <Heading to='/'>
            <ChevronRight width='25' heigh='25' />
            <h3>Back to Homepage</h3>
          </Heading>
          <ul>
            {bookCategories &&
              Object.keys(bookCategories).map((title) => (
                <li key={title}>
                  <BaseLink
                    to={'/category/' + title}
                    active={+(title === category)}
                  >
                    {title.split('-').join(' ')}
                  </BaseLink>
                </li>
              ))}
          </ul>
        </Sidebar>
      </SideBarWrap>
      <MainContentWrap>
        <BaseBanner>Featured {category}</BaseBanner>
        <ProductsWrap>
          {products &&
            products.map((item) => <BookCard item={item} key={item.id} />)}
        </ProductsWrap>
      </MainContentWrap>
    </>
  )
}

export default BookCategory
