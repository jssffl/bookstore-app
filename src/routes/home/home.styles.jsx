import styled from 'styled-components/macro'
import chevronRight from '../../assets/chevron-md-right.svg'
import chevronLeft from '../../assets/chevron-md-left.svg'
// export const HomeWrap = styled.div`
//   grid-column: center-start/ center-end;
// `

// export const BlockWrap = styled.div`
//   width: 100%;
//   height: 280px;
//   background-color: #fff;

//   /* padding: 5px 10px; */
//   box-shadow: 0 2px 6px rgba(0, 0, 0 0.3);
//   margin-right: 5px;
//   margin-bottom: 5px;
// `

export const BannerWrap = styled.div`
  grid-column: 1 /-1;
  height: 170px;
  background-color: #fff;
  margin-bottom: 5px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 900px) {
    height: 150px;
  }

  @media screen and (max-width: 600px) {
    height: 100px;
  }

  a {
    height: 100%;
    width: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    /* background-image: linear-gradient(to right bottom, #10bbd569, #00195069); */
  }

  img {
    width: 100%;
    height: 100%;
    object-position: center center;
    object-fit: cover;
    display: block;
    z-index: 10;
  }
`

export const PanelWrap = styled.div`
  grid-column: 1 /-1;
  height: 350px;
  background-color: #fff;
  margin-bottom: 5px;
`

export const HeadingSecondary = styled.h2`
  font-size: 18px;
  width: 100%;
  border-bottom: 1px solid var(--color-grey-light-1);
  padding-bottom: 5px;
`
