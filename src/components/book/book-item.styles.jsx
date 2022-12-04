import styled from 'styled-components'
import { BlogWrap } from '../../routes/home/home.styles'

export const BookItemWrap = styled.div`
  display: flex;
  padding: 10px 25px;
  font-size: 14px;
`

export const ItemImg = styled.div`
  width: 25%;
  padding: 10px 25px 30px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  img {
    width: 100%;
    display: Block;
  }

  button {
    margin-top: 30px;
  }
`

export const ItemInfo = styled.div`
  width: 50%;
  margin-right: 15px;
  padding: 15px 20px;
  background-color: #fff;

  h2 {
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--color-grey-light-1);
  }

  span {
    color: grey;

    display: block;
    margin: 3px 0;
  }

  p {
    margin: 30px 0;
    line-height: 1.6;
  }
`
export const ItemCheckout = styled.div`
  width: 25%;
  padding: 10px 15px;
  background-color: #fff;

  p {
    margin-bottom: 5px;
  }
`
export const ItemPrice = styled.div`
  padding: 10px 0;

  margin-bottom: 15px;
  text-align: right;
  border-bottom: 1px solid var(--color-grey-light-1);
`

export const SalePrice = styled.span`
  color: var(--color-pink);
  font-size: 26px;
  display: block;
`

export const ListPrice = styled.span`
  text-decoration: line-through;
`

export const ListPriceLabel = styled.span``

export const ButtonWrap = styled.div`
  border-top: 1px solid var(--color-grey-light-1);

  padding-top: 15px;
  margin-top: 25px;
  button {
    width: 100%;
    margin-bottom: 10px;
  }
`
