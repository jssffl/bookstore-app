import styled from 'styled-components/macro'

export const BookItemWrap = styled.div`
  display: grid;
  padding: 10px 25px;
  font-size: 14px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 70px 60px repeat(3, min-content);

  @media screen and (max-width: 1000px) {
    grid-template-rows: min-content 80px repeat(3, min-content);
    padding: 10px 15px;
  }

  @media screen and (max-width: 600px) {
    grid-template-rows: repeat(5, min-content);
  }
`

export const ItemTitle = styled.div`
  grid-column: 2/4;
  background-color: #fff;
  padding: 15px 10px 10px 0;

  h2 {
    font-size: 20px;
  }

  @media screen and (max-width: 1000px) {
    grid-column: 1/-1;
    grid-row: 1/2;
    padding: 10px;

    h2 {
      border-bottom: 1px solid var(--color-grey-light-1);
      text-align: center;
      padding: 5px 20px 10px;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 10px;
    h2 {
      border-bottom: none;
      padding: 0;
    }
  }
`

export const ItemImg = styled.div`
  padding: 10px 25px 30px 25px;
  background-color: #fff;
  grid-column: 1/2;
  grid-row: 1/4;

  img {
    width: 100%;
    display: Block;
  }

  @media screen and (max-width: 1000px) {
    grid-column: 1/3;
    grid-row: 2/4;
    padding: 0px;
    display: flex;
    justify-content: center;

    img {
      height: 300px;
      width: auto;
    }
  }

  @media screen and (max-width: 600px) {
    grid-column: 1/-1;
    grid-row: 3/4;
    border: 1px solid #f0f0f0;
    padding: 15px;

    img {
      height: auto;
      width: 50%;
    }
  }
`

export const ItemDescription = styled.div`
  grid-column: 2/4;
  grid-row: 3/4;
  background-color: #fff;
  padding: 15px 15px 15px 0px;
  line-height: 1.4;

  @media screen and (max-width: 1000px) {
    grid-column: 1/-1;
    grid-row: 4/5;
    padding: 15px 20px;
    margin-top: 15px;
  }

  @media screen and (max-width: 600px) {
    grid-row: 5/6;
  }
`

export const MetaInfo = styled.div`
  grid-column: 2/4;
  background-color: #fff;
  padding-right: 15px;
  display: flex;
  flex-direction: column;

  span {
    text-transform: capitalize;
  }

  @media screen and (max-width: 1000px) {
    grid-column: 3/-1;
    grid-row: 2/3;
  }

  @media screen and (max-width: 600px) {
    grid-column: 1/-1;
    grid-row: 2/3;
    padding-left: 15px;
    padding-bottom: 10px;
  }
`
export const StarWrap = styled.div`
  display: flex;
  align-items: flex-end;
  height: 24px;
  margin-bottom: 5px;

  span {
    margin: 0;
  }

  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
    height: auto;

    span {
      margin: 1px 0;
    }
  }

  @media screen and (max-width: 600px) {
    height: 24px;

    span {
      margin: 0;
    }
  }
`
export const RatingWrap = styled.div`
  display: inline-block;
  @media screen and (max-width: 700px) {
    display: block;
  }
`
export const FullStar = styled.span`
  height: 24px;
  &::before {
    content: '\\2605';
    color: #fed221;
    font-size: 20px;
  }
`

export const HalfStar = styled.span`
  font-size: 20px;
  width: 20px;
  height: 24px;
  color: gray;

  &::before {
    content: '\\2605';
  }

  &::after {
    content: '\\2605';
    color: #fed221;
    position: absolute;
    margin-left: -17px;
    width: 8.65px;
    overflow: hidden;
  }
`

export const ItemCheckout = styled.div`
  padding: 10px 15px;
  background-color: #fff;

  grid-column: 4/-1;
  grid-row: 1/4;

  height: 300px;
  width: 100%;
  margin-left: 10px;

  p {
    margin-bottom: 5px;
  }

  @media screen and (max-width: 1000px) {
    grid-column: 3/-1;
    grid-row: 3/4;
    margin: 0;
    padding: 0;
    padding-right: 15px;
  }

  @media screen and (max-width: 600px) {
    grid-column: 1/-1;
    grid-row: 4/5;
    padding: 10px;

    display: flex;
    flex-direction: column;
  }
`
export const ItemPrice = styled.div`
  padding: 10px 0;
  margin-bottom: 15px;
  text-align: right;
  border-bottom: 1px solid var(--color-grey-light-1);

  @media screen and (max-width: 1000px) {
    text-align: left;
  }
  @media screen and (max-width: 600px) {
    text-align: center;
    border-bottom: none;
    margin-bottom: 10px;
  }
`

export const SalePrice = styled.span`
  color: var(--color-pink);
  font-size: 26px;
  display: block;
`
export const ListPrice = styled.span`
  text-decoration: line-through;
`
export const CheckoutInfo = styled.div`
  height: 60px;

  @media screen and (max-width: 600px) {
    order: 1;
  }
`

export const ListPriceLabel = styled.span``

export const ButtonWrap = styled.div`
  border-top: 1px solid var(--color-grey-light-1);
  padding-top: 15px;
  margin-top: 25px;

  button {
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
    height: 35px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 0;
    margin-bottom: 20px;
    border-top: none;
    padding-top: 0;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--color-grey-light-1);
  }
`

export const BlockTitle = styled.h3`
  font-size: 18px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: ${({ isVisible }) =>
    isVisible ? 'none' : `1px solid #f0f0f0`};

  display: ${({ isVisible }) => (isVisible ? 'none' : 'block')};

  @media screen and (max-width: 1000px) {
    display: block;
    border-bottom: 1px solid #f0f0f0;
  }
`
export const ItemDetails = styled.div`
  padding: 15px 20px;
  background-color: #fff;
  grid-column: 1/-1;
  margin-top: 15px;

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    width: 50%;
    height: 30px;
    line-height: 30px;
    span::first-letter {
      text-transform: capitalize;
    }
  }

  label {
    font-weight: 700;
  }

  @media screen and (max-width: 600px) {
    li {
      width: 100%;
    }
  }
`
