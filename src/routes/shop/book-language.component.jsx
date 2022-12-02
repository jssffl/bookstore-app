import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { selectLanguage } from '../../store/books/books.selector'
import BookCard from '../../components/book/book-card.component'
import SideBarWrap from '../../components/UI/sidebar.component'
import MainContentWrap from '../../components/UI/main-content.component'
import BaseBanner from '../../components/UI/base-banner.component'

import {
  ProductsWrap,
  Sidebar,
  Heading,
  BaseLink,
  BannerTitle,
} from './book-shop.styles.'
import { ReactComponent as ChevronRight } from '../../assets/chevron-left.svg'

const BookLanguage = () => {
  const { lang } = useParams()
  const bookLanguage = useSelector(selectLanguage)
  const [products, setProducts] = useState(bookLanguage[lang])

  useEffect(() => {
    setProducts(bookLanguage[lang])
  }, [lang, bookLanguage])

  return (
    <>
      <SideBarWrap>
        <Sidebar>
          <Heading to='/'>
            <ChevronRight width='25' heigh='25' />
            <h3>Back to Homepage</h3>
          </Heading>
          <ul>
            {bookLanguage &&
              Object.keys(bookLanguage).map((title) => (
                <li key={title}>
                  <BaseLink to={'/lang/' + title} active={+(title === lang)}>
                    {title}
                  </BaseLink>
                </li>
              ))}
          </ul>
        </Sidebar>
      </SideBarWrap>
      <MainContentWrap>
        <BaseBanner>
          <BannerTitle>
            Featured <span>{lang}</span>
          </BannerTitle>
        </BaseBanner>
        <ProductsWrap>
          {products &&
            products.map((item) => <BookCard item={item} key={item.id} />)}
        </ProductsWrap>
      </MainContentWrap>
    </>
  )
}

export default BookLanguage
