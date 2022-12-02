import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
export const Heading = styled(Link)`
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 3px solid var(--color-primary);
`
export const Sidebar = styled.div`
  width: 100%;
  height: 500px;
  background-color: #fff;
  padding: 15px 10px;

  a {
    color: var(--color-grey-dark);

    &::first-letter {
      text-transform: capitalize;
    }
  }
  h3 {
    font-size: 18px;
    transform: translateY(-1px);
  }

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
    h3 {
      font-size: 15px;
      transform: translateY(1px);
    }

    ul {
      margin: 0 5px;
    }
  }
`

export const BaseLink = styled(Link)`
  font-size: 15px;
  width: 100%;
  display: inline-block;
  line-height: 35px;
  height: 35px;

  font-weight: ${({ active }) => (active ? '700' : '400')};

  @media screen and (max-width: 700px) {
    font-size: 13px;
    line-height: 30px;
    height: 30px;
  }
`

export const ProductsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 140px);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  background-color: #fff;
  padding: 5px 20px;
`

export const ContentWrap = styled.div`
  grid-column: center-start/ center-end;
  margin: 10px 20px;
`

export const BannerTitle = styled.h2`
  text-transform: capitalize;
  line-height: 60px;
  font-size: 24px;
  font-weight: 700;

  span::first-letter {
    text-transform: capitalize;
  }

  @media screen and (max-width: 1000px) {
    font-size: 22px;
  }

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`
