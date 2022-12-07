import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  position: relative;

  h2 {
    font-size: 20px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 800px) {
    button {
      width: 120px;
    }
  }

  @media screen and (max-width: 700px) {
    width: 95%;
    background-color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 30px 100px 100px;
    margin-bottom: 10px;

    h2 {
      font-size: 18px;
    }

    span {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 576px) {
    padding: 40px 30px;
  }

  @media screen and (max-width: 400px) {
    padding: 30px 20px;
  }
`

export const SignUpContainer = styled(Container)`
  h2 {
    margin-bottom: 25px;
  }
  @media screen and (max-width: 700px) {
    height: 470px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  @media screen and (max-width: 700px) {
    margin-top: 40px;
  }
`

export const successBanner = `
color: #155724;
background-color: #d4edda;
border-color: #c3e6cb;`

export const errorBanner = `
color: #721c24;
background-color: #f8d7da;
border-color: #f5c6cb;`

export const MessageBanner = styled.div`
  margin-top: 25px;
  padding-left: 10px;
  background-color: pink;
  border-radius: 5px;
  font-size: 14px;

  p {
    padding: 10px 0;
  }

  ${({ error }) => (error ? errorBanner : successBanner)}
`
