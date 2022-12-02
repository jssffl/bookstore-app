import styled from 'styled-components/macro'
import { MainContentWrap } from '../../components/UI/main.content.styles'
import { SideBar } from '../../components/UI/sidebar.styles'

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

export const BlogWrap = styled.div`
  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    display: block;
  }

  p {
    font-size: 14px;
    padding: 15px 0;
  }

  @media screen and (max-width: 700px) {
    text-align: center;
    img {
      height: 180px;
    }
    p {
      font-size: 13px;
      padding: 8px 0;
    }
  }
`

export const ClubWrap = styled.div`
  img {
    width: 100%;
    height: 260px;
    object-fit: cover;
    object-position: right;
    overflow: hidden;
    display: block;
  }

  p {
    font-size: 14px;
    padding: 15px 0;
  }

  @media screen and (max-width: 700px) {
    text-align: center;
    img {
      height: 180px;
    }

    p {
      font-size: 13px;
      padding: 8px 0;
    }
  }
`

export const HomeSideBar = styled(SideBar)`
  @media screen and (max-width: 700px) {
    grid-column: center-start/ center-end;
    grid-row: 3/4;
    display: flex;
    padding: 0;
    margin: 10px 20px;
    height: 220px;
  }
`
export const HomeContentWrap = styled(MainContentWrap)`
  @media screen and (max-width: 700px) {
    grid-column: center-start/ center-end;
    padding: 0;
    margin: 10px 20px;
  }
`
