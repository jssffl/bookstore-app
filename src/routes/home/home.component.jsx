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
            <img
              src='https://res.cloudinary.com/dqs1cwcmp/image/upload/v1670388900/Bookstore/book-club_mqswic.webp'
              alt=''
            />
            <p>Check out what's hot</p>
          </ClubWrap>
        </BlockWrap>
        <BlockWrap>
          <BlogWrap>
            <img
              src='https://res.cloudinary.com/dqs1cwcmp/image/upload/c_scale,h_300/v1670388097/Bookstore/sidebar-img_cjw2i4.webp'
              alt='blog'
            />
            <p>Check out our blog</p>
          </BlogWrap>
        </BlockWrap>
      </HomeSideBar>
      <HomeContentWrap>
        <BannerWrap>
          <picture>
            <source
              media='(max-width: 900px)'
              srcSet='https://res.cloudinary.com/dqs1cwcmp/image/upload/v1670387509/Bookstore/christmas-sm_fpsgcl.webp'
            />
            <img
              src='https://res.cloudinary.com/dqs1cwcmp/image/upload/v1670386671/Bookstore/christmas-lg_wg7dqd.webp'
              alt='banner'
            />
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
