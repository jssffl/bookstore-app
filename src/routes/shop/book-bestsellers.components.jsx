import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import BookCard from '../../components/book/book-card.component'
import { selectBestsellers } from '../../store/books/books.selector'
import { ProductsWrap, ContentWrap, BannerTitle } from './book-shop.styles.'

const BookBestsellers = () => {
  const bookBestsellers = useSelector(selectBestsellers)
  const [products, setProducts] = useState(bookBestsellers)

  useEffect(() => {
    setProducts(bookBestsellers)
  }, [bookBestsellers])

  return (
    <>
      <ContentWrap>
        <BannerTitle show={true}>Bestsellers</BannerTitle>

        <ProductsWrap>
          {products &&
            products.map((item) => (
              <BookCard custom={true} item={item} key={item.id} />
            ))}
        </ProductsWrap>
      </ContentWrap>
    </>
  )
}

export default BookBestsellers
