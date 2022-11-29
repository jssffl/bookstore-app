import styled from 'styled-components/macro'

// export const HomeWrap = styled.div`
//   grid-column: center-start/ center-end;
// `

export const BlockWrap = styled.div`
  width: 100%;
  height: 280px;
  background-color: #fff;

  /* padding: 5px 10px; */
  box-shadow: 0 2px 6px rgba(0, 0, 0 0.3);
  margin-right: 5px;
  margin-bottom: 5px;
`

export const BannerWrap = styled.div`
  grid-column: 1 /6;
  height: 230px;
  background-color: #fff;
  margin-bottom: 5px;

  overflow: hidden;
  position: relative;

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
    background-image: linear-gradient(to right bottom, #10bbd540, #00195040);
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

export const SubBannerWrap = styled.div`
  height: 230px;
  background-color: #fff;
  margin-left: 5px;
  grid-column: 6 /-1;
  margin-right: 20px;

  @media screen and (max-width: 1200px) {
    /* width: 250px; */
  }

  @media screen and (max-width: 1000px) {
    /* display: none; */
  }
`

export const PanelWrap = styled.div`
  grid-column: 1 /-1;
  height: 350px;
  background-color: #fff;
  margin-bottom: 5px;
  margin-right: 20px;
`
