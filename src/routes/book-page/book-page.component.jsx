import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import BookItem from '../../components/book/book-item.component'
import { BookPageWrap } from './book-page.styles'
import Spinner from '../../components/UI/spinner.component'

import { selectBooks } from '../../store/books/books.selector'

const BookPage = () => {
  const { bookId } = useParams()
  const books = useSelector(selectBooks)
  const [bookItem, setBookItem] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const findBook = books && books.find((book) => book.id === Number(bookId))

    if (findBook) {
      setIsLoading(false)
      setBookItem(findBook)
    }
  }, [books, bookId])

  return (
    <BookPageWrap>
      {isLoading || !bookItem ? (
        <Spinner fullWidth={true} />
      ) : (
        <BookItem item={bookItem} />
      )}
    </BookPageWrap>
  )
}

export default BookPage
