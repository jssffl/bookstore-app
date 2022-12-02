import {
  SearchFormContainer,
  SearchLogoContainer,
  SearchInput,
  FilteredBooksContainer,
  FilteredBookContainer,
  FilteredBookDetail,
  FilteredBookImageContainer,
  LoadingSpinner,
  SearchButton,
} from './search-form.styles.jsx'
import { useEffect, useState } from 'react'

import { ReactComponent as SearchIcon } from '../../assets/magnifying-glass.svg'

import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectBooks } from '../../store/books/books.selector.js'

const defaultSearchField = {
  searchString: '',
  filteredBooks: [],
}

const SearchForm = () => {
  const location = useLocation()
  const [searchField, setSearchField] = useState(defaultSearchField)
  const { searchString, filteredBooks } = searchField
  const [isLoading, setIsLoading] = useState(false)
  const books = useSelector(selectBooks)
  const navigate = useNavigate()

  useEffect(() => {
    setSearchField(defaultSearchField)
  }, [location])

  const searchHandler = (keyword) => {
    setIsLoading(true)
    setSearchField((prevState) => ({
      ...prevState,
      searchString: keyword,
    }))

    if (!keyword) {
      setSearchField((prevState) => ({ ...prevState, filteredBooks: [] }))
      setIsLoading(false)
      return
    }

    const bookItems = []
    books.forEach((item) => {
      if (
        item.title.toLocaleLowerCase().includes(keyword) ||
        item.author.toLocaleLowerCase().includes(keyword)
      ) {
        bookItems.push(item)
      }
    })

    setSearchField((prevState) => ({ ...prevState, filteredBooks: bookItems }))
    setIsLoading(false)
  }

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase().trim()
    searchHandler(searchFieldString)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    searchHandler(searchString)
  }

  const navigateToBookPage = (book) => {
    navigate(`/shop/${book.id}`)
  }

  const resetSearch = () => {
    setTimeout(() => {
      setSearchField(defaultSearchField)
    }, 200)
  }

  return (
    <SearchFormContainer onSubmit={onSubmitHandler}>
      <SearchLogoContainer>
        {isLoading ? <LoadingSpinner /> : <SearchIcon fill='#808080' />}
      </SearchLogoContainer>
      <SearchInput
        type='text'
        name='search'
        onChange={onSearchChange}
        placeholder='Search for books by title/author...'
        value={searchString}
        onBlur={resetSearch}
      />
      <SearchButton>
        <span>Search</span>
        <SearchIcon fill='#fff' />
      </SearchButton>

      {filteredBooks.length !== 0 && (
        <FilteredBooksContainer>
          {filteredBooks.map((book) => (
            <FilteredBookContainer
              key={book.id}
              onClick={() => navigateToBookPage(book)}
            >
              <FilteredBookImageContainer>
                <img src={book.image} alt='' />
              </FilteredBookImageContainer>
              <FilteredBookDetail>
                <h6>{book.title}</h6>
                <p>by {book.author}</p>
              </FilteredBookDetail>
            </FilteredBookContainer>
          ))}
        </FilteredBooksContainer>
      )}
      {searchString && filteredBooks.length === 0 && (
        <FilteredBooksContainer>
          <p>No Book Found</p>
        </FilteredBooksContainer>
      )}
    </SearchFormContainer>
  )
}

export default SearchForm
