import { useSelector } from 'react-redux'

import {
  BannerWrap,
  HeadingSecondary,
  ClubWrap,
  BlogWrap,
  HomeSideBar,
  HomeContentWrap,
} from './home.styles'

import { BlockWrap } from '../../components/UI/block-wrap.styles'
import BaseCarousel from '../../components/UI/base-carousel.component'
import BookCard from '../../components/book/book-card.component'
import ClubImg from '../../assets/book-club.webp'
import blogImg from '../../assets/sidebar-img.webp'
import christmasLg from '../../assets/christmas-lg.webp'
import christmasSm from '../../assets/christmas-sm.webp'
import {
  selectBestsellers,
  selectNewReleases,
} from '../../store/books/books.selector'

const Home = () => {
  const bestsellers = useSelector(selectBestsellers)
  const newReleases = useSelector(selectNewReleases)

  return (
    <>
      <HomeSideBar>
        <BlockWrap>
          <ClubWrap>
            <img src={ClubImg} alt='club' />
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
            <source media='(max-width: 900px)' srcSet={christmasSm} />
            <img src={christmasLg} alt='banner' />
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
  )
}

export default Home
