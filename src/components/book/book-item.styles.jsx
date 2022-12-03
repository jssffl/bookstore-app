import styled from 'styled-components'

export const BookItemWrap = styled.div`
  display: flex;
`

export const ImgWrap = styled.div`
  max-width: 250px;
  min-width: 200px;
  padding: 0 10px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  button {
    margin-top: 30px;
  }
  @media screen and (max-width: 600px) {
    padding: 0 10px;
    width: 50%;
  }
`

export const InfoWrap = styled.div`
  max-width: 600px;
  margin: 0 10px 0 40px;

  h2 {
    margin: 0 0 10px 0;
  }

  h4 {
    margin: 10px 0;
  }

  span {
    color: grey;
    font-style: italic;
    font-size: 12px;
    display: block;
    margin: 3px 0;
  }

  p {
    font-size: 14px;
    margin: 30px 0;
    line-height: 1.6;
  }

  @media screen and (max-width: 600px) {
    margin: 30px 15px;

    h2 {
      font-size: 20px;
    }
  }
`
