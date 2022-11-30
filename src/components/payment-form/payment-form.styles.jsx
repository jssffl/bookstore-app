import styled from 'styled-components'
import CustomButton from '../UI/button.component'

export const FormContainer = styled.form`
  width: 45%;
  margin-left: auto;
  margin-top: 40px;

  h2 {
    font-size: 22px;
    margin-bottom: 20px;
  }
`

export const PaymentButton = styled(CustomButton)`
  margin-left: auto;
  margin-top: 30px;
`
