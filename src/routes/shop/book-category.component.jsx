import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BookCard from '../../components/book/book-card.component'
import BaseSideBar from '../../components/UI/base-sidebar.component'
import { selectCategories } from '../../store/books/books.selector'
import { fetchBooksAsync } from '../../store/books/books.slice'

const BookCategory = () => {
  const { category } = useParams()
  const bookCategories = useSelector(selectCategories)
  const [products, setProducts] = useState(bookCategories[category])

  useEffect(() => {
    setProducts(bookCategories[category])
  }, [category, bookCategories])

  return (
    <>
      <BaseSideBar></BaseSideBar>

      <div>
        {products &&
          products.map((item) => <BookCard item={item} key={item.id} />)}
      </div>
    </>
  )
}

export default BookCategory
