import styled from 'styled-components/macro'

export const CartContainer = styled.div`
  grid-column: center-start / center-end;
  padding: 20px 20px 10px 20px;

  margin: 10px;
  background-color: #fff;

  h1 {
    font-size: 25px;
    align-self: flex-start;
    padding-bottom: 5px;
    width: 100%;
    border-bottom: 1px solid var(--color-grey-light-3);
  }

  @media screen and (max-width: 600px) {
    padding: 10px 15px;

    h1 {
      font-size: 22px;
    }
  }
`

export const Total = styled.div`
  grid-column: center-start / center-end;
  padding: 15px 20px;
  margin: 0px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  font-size: 16px;
  height: 180px;

  dl {
    display: flex;
    text-align: right;
    padding: 0;
    margin: 10px 0;

    &:nth-child(2) {
      color: var(--color-pink);
      font-weight: 600;
    }
  }

  dt {
    width: 80%;
  }

  dd {
    width: 20%;
  }

  button {
    margin-left: auto;
    margin-top: 30px;
    font-size: 14px;
    height: 35px;
  }

  @media screen and (max-width: 900px) {
    padding: 10px 20px;

    button {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
    dl {
      margin: 5px 0;
    }
  }
`
