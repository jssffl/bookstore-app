import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { MainContentWrap } from '../../components/UI/main.content.styles'
import { SideBar } from '../../components/UI/sidebar.styles'

export const ShopSideBarWrap = styled(SideBar)`
  @media screen and (max-width: 700px) {
    width: 100%;
    margin-right: 0;
  }
`

export const ShopSideBar = styled.div`
  width: 100%;
  height: 500px;
  background: #fff;
  padding: 15px 10px;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10px;

    li {
      border-bottom: 1px solid #f0f0f0;
    }
  }

  @media screen and (max-width: 700px) {
    padding: 0px;
    display: flex;
    height: 60px;
    background: #fafafa;

    ul {
      margin: 0;
      flex-direction: row;
      width: 100%;
      padding: 0 3px;
    }

    li {
      border-bottom: 1px solid #e7e7e7;
      flex: 1;
      text-align: center;
      display: flex;
    }
  }
`

export const Heading = styled(Link)`
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 3px solid var(--color-primary);

  h3 {
    font-size: 18px;
    transform: translateY(-1px);
    color: var(--color-grey-dark);
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`

export const BaseLink = styled(Link)`
  font-size: 15px;
  width: 100%;
  display: block;
  line-height: 35px;
  height: 35px;
  font-weight: ${({ active }) => (active ? '700' : '400')};
  color: var(--color-grey-dark);
  text-transform: capitalize;

  @media screen and (max-width: 700px) {
    font-size: 14px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    line-height: 1.1;
  }

  @media screen and (max-width: 500px) {
    font-size: 13px;
  }
`

export const ProductsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 140px);
  grid-column-gap: 10px;
  grid-row-gap: 15px;
  background-color: #fff;
  padding: 5px 15px;
  justify-items: center;

  @media screen and (max-width: 700px) {
    padding: 20px 10px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 0px;
    padding: 20px 0;
  }

  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0px;
  }
`

export const ContentWrap = styled.div`
  width: 100%;
  margin: 10px 20px;

  @media screen and (max-width: 700px) {
    margin: 0;
  }
`

export const BannerTitle = styled.h2`
  line-height: 60px;
  font-size: 24px;
  font-weight: 700;
  background-color: #fff;
  width: 100%;
  height: 60px;
  padding: 0 15px;
  margin-bottom: 10px;

  ::first-letter,
  span::first-letter {
    text-transform: capitalize;
  }

  @media screen and (max-width: 1000px) {
    font-size: 22px;
  }

  @media screen and (max-width: 700px) {
    display: ${({ show }) => (show ? 'block' : 'none')};
    margin-bottom: 0px;
    background: #fafafa;
    text-align: center;
    border-bottom: 1px solid #e7e7e7;
    font-size: 20px;
  }
`

export const ShopContentWrap = styled(MainContentWrap)`
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`
