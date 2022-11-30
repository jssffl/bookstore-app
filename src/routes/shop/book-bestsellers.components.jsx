import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BookCard from '../../components/book/book-card.component'
import SideBarWrap from '../../components/UI/sidebar.component'
import MainContentWrap from '../../components/UI/main-content.component'
import BaseBanner from '../../components/UI/base-banner.component'
import { selectBestsellers } from '../../store/books/books.selector'

import { ProductsWrap, Sidebar, Heading, BaseLink } from './book-shop.styles.'
import { ReactComponent as ChevronRight } from '../../assets/chevron-left.svg'

const BookBestsellers = () => {
  const { bestsellers } = useParams()
  const bookBestsellers = useSelector(selectBestsellers)
  const [products, setProducts] = useState(bookBestsellers)

  useEffect(() => {
    setProducts(bookBestsellers)
  }, [bestsellers, bookBestsellers])

  return (
    <>
      <SideBarWrap>
        <Sidebar>
          <Heading to='/'>
            <ChevronRight width='25' heigh='25' />
            <h3>Back to Homepage</h3>
          </Heading>
          <ul></ul>
        </Sidebar>
      </SideBarWrap>
      <MainContentWrap>
        <BaseBanner>Bestsellers</BaseBanner>
        <ProductsWrap>
          {products &&
            products.map((item) => <BookCard item={item} key={item.id} />)}
        </ProductsWrap>
      </MainContentWrap>
    </>
  )
}

export default BookBestsellers
