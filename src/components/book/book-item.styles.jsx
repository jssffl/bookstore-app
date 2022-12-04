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
  flex: 1;
  margin-right: 15px;
  padding: 15px 20px;
  background-color: #fff;

  h2 {
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--color-grey-light-1);
    font-size: 24px;
  }

  span {
    margin: 5px 0;
    display: inline-block;
  }

  p {
    margin: 30px 0;
    line-height: 1.6;
  }
`
export const ItemCheckout = styled.div`
  width: 300px;
  height: 350px;
  padding: 10px 15px;
  background-color: #fff;
  font-size: 14px;

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
export const FullStar = styled.span`
  &::before {
    content: '\\2605';
    color: #fed221;
    font-size: 18px;
  }
`

export const HalfStar = styled.span`
  display: inline-block;
  font-size: x-large;
  width: 20px;
  color: gray;

  &::before {
    content: '\\2605';
  }

  &::after {
    content: '\\2605';

    color: #fed221;
    position: absolute;
    margin-left: -20px;
    width: 9px;
    overflow: hidden;
  }
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
    font-size: 15px;
    height: 40px;
  }
`
