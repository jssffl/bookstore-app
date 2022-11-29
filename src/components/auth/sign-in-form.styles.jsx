import styled from 'styled-components'

import { Container, errorBanner } from './sign-up-form.styles'

export const SignInContainer = styled(Container)`
  @media screen and (max-width: 700px) {
    height: 400px;
  }

  span {
    align-self: flex-end;
    font-size: 14px;
    color: #444;
    border-bottom: 1px dotted #444;
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

export const MessageBanner = styled.div`
  margin-top: 25px;
  padding-left: 10px;
  background-color: pink;
  border-radius: 5px;
  font-size: 14px;

  p {
    padding: 10px 0;
  }

  ${(props) => {
    return props.error ? errorBanner : ''
  }}
`
