import styled from 'styled-components/macro'

export const EmptyCartWrap = styled.div`
  grid-column: center-start / center-end;
  margin: 10px;
  font-size: 14px;

  h2 {
    background-color: #fff;
    font-size: 16px;
    font-weight: 400;
    padding: 10px;
  }

  @media screen and (max-width: 600px) {
    button {
      width: 100%;
    }
  }
`

export const Message = styled.p`
  background-color: #fff;
  margin: 10px 0;
  padding: 20px 10px;

  h3 {
    font-size: 16px;
  }

  p {
    height: 40px;
    line-height: 40px;
  }
`

export const ButtonWrap = styled.div`
  padding: 10px;

  button {
    margin: 0 auto;
  }
`
