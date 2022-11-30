import styled from 'styled-components/macro'

export const CartContainer = styled.div`
  grid-column: center-start / center-end;
  padding: 20px 20px 10px 20px;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;

  background-color: #fff;

  h1 {
    font-size: 25px;
    align-self: flex-start;
    padding-bottom: 5px;
    width: 100%;
    border-bottom: 1px solid var(--color-grey-light-3);
  }
`

export const Total = styled.div`
  grid-column: center-start / center-end;
  padding: 10px 20px;
  margin: 0px 10px 10px 10px;

  background-color: #fff;
  font-size: 18px;
  height: 300px;

  dl {
    width: 100%;
    display: flex;
    text-align: right;
    &:nth-child(2) {
      color: var(--color-pink);
      font-weight: 600;
    }
  }

  dt {
    width: 70%;
  }

  dd {
    width: 30%;
  }
`
