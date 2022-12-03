import { useSelector } from 'react-redux'

import {
  BannerWrap,
  HeadingSecondary,
  ClubWrap,
  BlogWrap,
  HomeSideBar,
  HomeContentWrap,
  HomeBlockWrap,
  SpinnerBlock,
} from './home.styles'

import { BlockWrap } from '../../components/UI/block-wrap.styles'
import BaseCarousel from '../../components/UI/base-carousel.component'
import BookCard from '../../components/book/book-card.component'

import featuredImgSm from '../../assets/christmas-sm.webp'
import featuredImgLg from '../../assets/christmas-lg.webp'
import blogImg from '../../assets/sidebar-img.jpg'
import clubImg from '../../assets/book-club.webp'
import Spinner from '../../components/UI/spinner.component'
import {
  selectBestsellers,
  selectFetchBooksIsLoading,
  selectNewReleases,
} from '../../store/books/books.selector'

const Home = () => {
  const isLoading = useSelector(selectFetchBooksIsLoading)
  const bestsellers = useSelector(selectBestsellers)
  const newReleases = useSelector(selectNewReleases)

  return (
    <>
      {isLoading ? (
        <Spinner fullWidth='true' />
      ) : (
        <>
          <HomeSideBar>
            <BlockWrap>
              <ClubWrap>
                <img src={clubImg} alt='' />
                <p>Check out what's hot</p>
              </ClubWrap>
            </BlockWrap>
            <BlockWrap>
              <BlogWrap>
                <img src={blogImg} alt='blog' />
                <p>Check out our blog</p>
              </BlogWrap>
            </BlockWrap>
          </HomeSideBar>
          <HomeContentWrap>
            <BannerWrap>
              <picture>
                <source media='(max-width: 900px)' srcSet={featuredImgSm} />
                <img src={featuredImgLg} alt='banner' />
              </picture>
            </BannerWrap>

            <BlockWrap>
              <HeadingSecondary>Bestsellers</HeadingSecondary>

              <BaseCarousel>
                {bestsellers.map((item) => (
                  <BookCard item={item} key={item.id} />
                ))}
              </BaseCarousel>
            </BlockWrap>

            <BlockWrap>
              <HeadingSecondary>New Releases</HeadingSecondary>
              <BaseCarousel>
                {newReleases.map((item) => (
                  <BookCard item={item} key={item.id} />
                ))}
              </BaseCarousel>
            </BlockWrap>
          </HomeContentWrap>
        </>
      )}
    </>
  )
}

export default Home
