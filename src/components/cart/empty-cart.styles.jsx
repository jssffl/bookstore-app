import styled from 'styled-components/macro'

export const EmptyCartWrap = styled.div`
  width: 100%;
  margin: 10px;
  font-size: 14px;

  h2 {
    background-color: #fff;
    font-size: 18px;
    padding: 15px 10px;
  }

  @media screen and (max-width: 600px) {
    margin: 0px;
    background-color: #fff;
    text-align: center;
    height: calc(100vh - 160px - 198px);

    h2 {
      background: #fafafa;
      border-bottom: 1px solid #e7e7e7;

      padding: 20px 10px;
    }
  }
`

export const Message = styled.div`
  background-color: #fff;
  margin: 10px 0;
  padding: 25px 10px;

  h3 {
    font-size: 18px;
  }

  p {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }

  @media screen and (max-width: 600px) {
    margin: 0px;

    p {
      height: 50px;
      line-height: 50px;
    }
  }
`

export const ButtonWrap = styled.div`
  display: flex;
  padding: 10px 0;
  button {
    margin-right: 10px;
    height: 40px;
  }

  @media screen and (max-width: 600px) {
    padding: 20px 0;
    flex-wrap: wrap;
    button {
      width: 100%;
      margin-right: 0px;
      margin-bottom: 20px;
      font-size: 14px;
    }
  }
`
