import styled from 'styled-components/macro'

import { multiEllipsis } from '../../components/book/book-card.styles'
export const CheckoutWrap = styled.div`
  display: flex;
  grid-column: center-start / center-end;
  margin: 10px;
  font-size: 12px;
  color: #333;

  h2 {
    font-size: 16px;
  }
`

export const PaymentInfo = styled.div`
  width: 70%;
  margin-right: 10px;
`

export const Banner = styled.div`
  background-color: var(--color-primary);
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
`
export const Title = styled.span`
  /* ${multiEllipsis} */
`

export const UserInfo = styled.div`
  width: 65%;
  div {
    /* display: flex;
    flex-direction: column; */

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
  height: 300px;
  background-color: #fff;
  font-size: 12px;

  dl {
    width: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid var(--color-grey-light-1);
  }

  dt {
    width: 80%;

    span {
      display: block;
      line-height: 1.1;
    }
  }

  dd {
    margin: 0;
  }
`
