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
export const AvailableText = styled.p``

export const InfoCheckoutWrap = styled.div``
export const QtyWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  svg {
    margin: 8px 0;
    width: 18%;
    filter: invert(33%) sepia(16%) saturate(3%) hue-rotate(27deg)
      brightness(94%) contrast(89%);
    cursor: pointer;
  }
`
export const CartItemWrap = styled.div`
  display: flex;
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
    justify-content: flex-end;
  }

  h4 {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 600;

    a {
      color: var(--color-grey-dark);
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

  border: 1px solid darkgrey;
  border-radius: 3px;
  box-shadow: 0px 0px 2px darkgrey;
  margin-bottom: 10px;

  span {
    padding: 7px;
    font-size: 20px;
    cursor: pointer;
  }
`
