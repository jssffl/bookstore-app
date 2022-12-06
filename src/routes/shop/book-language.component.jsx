import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { selectLanguage } from '../../store/books/books.selector'
import BookCard from '../../components/book/book-card.component'

import MainContentWrap from '../../components/UI/main-content.component'
import BaseBanner from '../../components/UI/base-banner.component'

import {
  ProductsWrap,
  ShopSideBarWrap,
  ShopSideBar,
  Heading,
  BaseLink,
  BannerTitle,
  ShopContentWrap,
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
      <ShopSideBarWrap>
        <ShopSideBar>
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
        </ShopSideBar>
      </ShopSideBarWrap>
      <ShopContentWrap>
        <BannerTitle>
          Featured <span>{lang}</span>
        </BannerTitle>

        <ProductsWrap>
          {products &&
            products.map((item) => <BookCard item={item} key={item.id} />)}
        </ProductsWrap>
      </ShopContentWrap>
    </>
  )
}

export default BookLanguage
