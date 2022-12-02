import styled from 'styled-components/macro'
import chevronRight from '../../assets/chevron-md-right.svg'
import chevronLeft from '../../assets/chevron-md-left.svg'

export const CarouselWrap = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;

  color: #444;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 35px;
    background: rgba(255, 255, 255, 0.8);
    z-index: 2;
  }

  &::before {
    left: 0;
    z-index: 2;
    transform: translateX(-10px);
  }

  &::after {
    right: 0;
    z-index: 2;
    transform: translateX(10px);
  }
`

export const CarouselRightButton = styled.button`
  background-image: url(${chevronRight});
  content: '';
  width: 20px;
  height: 20px;
  font-size: 15px;
  position: absolute;
  right: 0;
  z-index: 3;
`

export const CarouselLeftButton = styled.button`
  background-image: url(${chevronLeft});
  content: '';
  width: 20px;
  height: 20px;
  font-size: 15px;
  position: absolute;
  right: left;
  z-index: 3;
`
