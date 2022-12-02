import { useSelector } from 'react-redux'

import { BannerWrap, PanelWrap, HeadingSecondary } from './home.styles'

import SideBarWrap from '../../components/UI/sidebar.component'
import MainContent from '../../components/UI/main-content.component'
import { BlockWrap } from '../../components/UI/block-wrap.styles'
import BaseCarousel from '../../components/UI/base-carousel.component'
import BookCard from '../../components/book/book-card.component'

import featuredImgSm from '../../assets/christmas-sm.png'
import featuredImgLg from '../../assets/christmas-lg.png'

import { selectBestsellers } from '../../store/books/books.selector'

const Home = () => {
  const bestsellers = useSelector(selectBestsellers)

  return (
    <>
      <SideBarWrap>
        <BlockWrap>Newsletter</BlockWrap>
        <BlockWrap>BLOG</BlockWrap>
      </SideBarWrap>
      <MainContent>
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

        <PanelWrap>News release</PanelWrap>
      </MainContent>
    </>
  )
}

export default Home
