import styled, { css } from 'styled-components/macro'

const subColor = 'grey'
const mainColor = 'black'

const shrinkLabelStyles = css`
  top: -25px;
  left: 3px;
  font-size: 14px;
  color: ${mainColor};
`

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 14px;
  font-weight: normal;
  position: absolute;
  left: 10px;
  top: 10px;
  pointer-events: none;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`

export const Input = styled.input`
  background-color: white;
  color: ${subColor};
  font-size: 14px;
  padding: 10px;
  display: block;

  border-radius: 3px;
  border: 1px solid #ccc;
  margin: 20px 0;
  width: 100%;

  &:focus {
    outline: none;
  }
`

export const Group = styled.div`
  position: relative;
  margin-bottom: 35px;

  input[type='password'] {
    letter-spacing: 0.3em;
  }

  @media screen and (max-width: 576px) {
    margin: 35px 0;
  }
`
