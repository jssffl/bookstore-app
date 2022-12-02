import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useSelector } from 'react-redux'
import { selectBestsellers } from '../../store/books/books.selector'
import {
  CarouselWrap,
  CarouselLeftButton,
  CarouselRightButton,
} from './base-carousel.styles'

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest
  // onMove means if dragging or swiping in progress.
  return <CarouselRightButton onClick={() => onClick()} />
}

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest
  // onMove means if dragging or swiping in progress.
  return <CarouselLeftButton onClick={() => onClick()} />
}

const BaseCarousel = ({ children }) => {
  const bestsellers = useSelector(selectBestsellers)
  const responsive = {
    LargeDesktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 6,
    },

    desktop: {
      breakpoint: { max: 1200, min: 1000 },
      items: 5,
    },
    LargeTablet: {
      breakpoint: { max: 1000, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 600 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 2,
    },
  }
  return (
    <CarouselWrap>
      <Carousel
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        responsive={responsive}
        infinite={true}
      >
        {children}
      </Carousel>
    </CarouselWrap>
  )
}

export default BaseCarousel
