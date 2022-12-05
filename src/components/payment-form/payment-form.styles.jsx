import styled from 'styled-components'
import CustomButton from '../UI/button.component'

export const Form = styled.form`
  width: 65%;
  padding: 20px 10px;

  h2 {
    font-size: 18px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const PaymentButton = styled(CustomButton)`
  margin-top: 20px;
`

export const ElementWrap = styled.div`
  font-size: 14px;
  border: 1px solid #444;
  border-radius: 5px;
  padding: 10px 5px;
  box-shadow: inset 0 1px 1px rgb(0, 0, 0, 0.08);
`
