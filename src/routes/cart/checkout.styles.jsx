import styled from 'styled-components/macro'

import { multiEllipsis } from '../../components/book/book-card.styles'
export const CheckoutWrap = styled.div`
  display: flex;
  grid-column: center-start / center-end;
  margin: 10px;
  font-size: 14px;
  color: #333;

  h2 {
    font-size: 18px;
  }
`

export const PaymentInfo = styled.div`
  width: 70%;
  margin-right: 10px;
`

export const Banner = styled.div`
  background-color: var(--color-primary);
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
`
export const Title = styled.span`
  /* ${multiEllipsis} */
  padding-bottom: 5px;
`

export const UserInfo = styled.div`
  width: 65%;
  padding: 20px 10px;

  h2 {
    margin-bottom: 15px;
  }

  div {
    margin: 10px 0;
  }

  input {
    display: block;
    width: 100%;
    height: 30px;
    padding: 6px 12px;
    font-size: 12px;
    line-height: 1.42857;
    margin-top: 5px;

    background-color: #fff;
    background-image: none;
    border: 1px solid #444;
    border-radius: 5px;
    box-shadow: inset 0 1px 1px rgb(0, 0, 0, 0.08);
  }
`

export const OrderInfo = styled.div`
  flex: 1;
  background-color: #fff;
  margin-bottom: 5px;

  h2 {
    padding: 10px;
    background-color: var(--color-pink);
    color: #fff;
  }

  dl {
    width: 100%;
    display: flex;
    margin: 0;
    justify-content: space-between;
    padding: 15px 10px;
    border-bottom: 1px solid var(--color-grey-light-1);
  }

  dt {
    width: 80%;
    padding-right: 5px;
    span {
      display: block;
      line-height: 1.1;
    }
  }

  dd {
    margin: 0;
  }
`
export const Total = styled.dd`
  color: var(--color-pink);
  font-weight: 700;
`

export const Summary = styled.div`
  font-weight: 700;
`
