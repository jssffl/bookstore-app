import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const ImgWrap = styled.div`
  width: 100%;

  img {
    height: 100%;
    width: 100%;
  }
`
export const PriceWrap = styled.p`
  color: var(--color-pink);
  font-size: 18px;
  margin: 5px 0;
`

export const InfoWrap = styled.div``

export const MetaInfo = styled.div``
export const Format = styled.span`
  text-transform: capitalize;
  border-right: 1px solid darkgrey;
  padding-right: 10px;
  margin-right: 10px;
`
export const AvailableText = styled.p`
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`

export const InfoCheckoutWrap = styled.div`
  svg {
    margin: 8px 0;
    width: 23px;
    filter: invert(33%) sepia(16%) saturate(3%) hue-rotate(27deg)
      brightness(94%) contrast(89%);
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    svg {
      width: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    svg {
      margin-left: auto;
    }
  }
`

export const QtyButton = styled.div`
  width: 100px;
  height: 30px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid var(--color-grey-light-3);
  border-radius: 3px;
  box-shadow: inset 0 1px 1px rgb(0, 0, 0, 0.08);

  span {
    padding: 0 7px;
    font-size: 20px;
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    width: 90px;
  }

  @media screen and (max-width: 600px) {
  }
`

export const CartItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px 0;
  margin-top: 5px;
  font-size: 14px;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-light-3);
  }

  ${ImgWrap} {
    width: 13%;
  }

  ${InfoWrap} {
    width: 60%;
    padding: 0 25px;
  }

  ${InfoCheckoutWrap} {
    width: 27%;
    display: flex;

    flex-direction: column;
    align-items: flex-end;
  }

  h4 {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;

    a {
      color: var(--color-grey-dark);
    }
  }

  @media screen and (max-width: 900px) {
    ${ImgWrap} {
      width: 16%;
    }

    ${InfoWrap} {
      width: 70%;
      padding: 0 25px;
    }

    ${InfoCheckoutWrap} {
      width: 14%;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
    padding: 10px 0;

    h4 {
      font-size: 16px;
      line-height: 1.25;
    }

    ${ImgWrap} {
      width: 100px;
    }

    ${InfoWrap} {
      width: calc(100% - 100px);
      padding: 0;
      padding-left: 15px;
    }

    ${MetaInfo} {
      font-size: 12px;
    }

    ${PriceWrap} {
      font-size: 16px;
    }

    ${InfoCheckoutWrap} {
      text-align: right;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      margin-top: 15px;

      ${QtyButton} {
        grid-column: 1 / 2;
        width: 100px;
      }

      ${PriceWrap}, svg {
        grid-column: 2/3;
      }
    }
  }
`
