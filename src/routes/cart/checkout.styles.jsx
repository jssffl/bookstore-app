import styled from 'styled-components/macro'
import chevronUpIcon from '../../assets/chevron-thin-up.svg'
import chevronDownIcon from '../../assets/chevron-thin-down.svg'

export const CheckoutWrap = styled.div`
  display: flex;
  grid-column: center-start / center-end;
  margin: 10px;
  font-size: 14px;
  color: #333;

  h2 {
    font-size: 18px;
  }
`
export const PaymentInfo = styled.div`
  width: 70%;
  margin-right: 10px;

  @media screen and (max-width: 800px) {
    width: 95%;
    margin: 0 auto;
  }
`
const chevronDown = `&::after{ background: url(${chevronDownIcon}) right center no-repeat}`
const chevronUp = `&::after{ background: url(${chevronUpIcon}) right center no-repeat}`

export const MobileToggleDropdown = styled.h4`
  font-weight: 400;
  position: relative;
  height: 20px;
  line-height: 20px;

  &::after {
    width: 25px;
    height: 25px;
    font-size: 25px;
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
  }

  @media screen and (max-width: 800px) {
    ${({ open }) => (open ? chevronDown : chevronUp)}
  }
`

export const MobileSummary = styled.div`
  padding: 10px 20px;
  background-color: #fff;
  margin-bottom: 10px;
  display: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  dl {
    width: 100%;
    display: flex;
    margin: 14px 0;
    justify-content: space-between;
  }

  dt {
    width: 80%;
    padding-right: 5px;
    span {
      display: block;
      line-height: 1.1;
    }
  }

  dd {
    margin: 0;
  }

  @media screen and (max-width: 800px) {
    display: block;
  }
`
const show = `
    opacity: 1;
    transform: scale(1,1);
    position: relative;
`
const hide = `
    opacity: 0;
    transform: scale(1,0);
    position: absolute;
`
export const MobileDropDown = styled.div`
  @media screen and (max-width: 800px) {
    ${({ open }) => (open ? show : hide)}
  }
`

export const Banner = styled.div`
  background-color: var(--color-primary);
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
`
export const Title = styled.span`
  padding-bottom: 5px;
`

export const UserInfo = styled.div`
  width: 65%;
  padding: 20px 10px;

  h2 {
    margin-bottom: 15px;
  }

  div {
    margin: 10px 0;
  }

  input {
    display: block;
    width: 100%;
    height: 30px;
    padding: 6px 12px;
    font-size: 12px;
    line-height: 1.42857;
    margin-top: 5px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #444;
    border-radius: 5px;
    box-shadow: inset 0 1px 1px rgb(0, 0, 0, 0.08);
  }

  @media screen and (max-width: 800px) {
    width: 80%;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`

export const OrderWrap = styled.div`
  flex: 1;
  margin-bottom: 5px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`
export const OrderInfo = styled.div`
  background-color: #fff;

  h2 {
    padding: 10px;
    background-color: var(--color-pink);
    color: #fff;
  }

  dl {
    width: 100%;
    display: flex;
    margin: 0;
    justify-content: space-between;
    padding: 15px 10px;
    border-bottom: 1px solid var(--color-grey-light-1);
  }

  dt {
    width: 80%;
    padding-right: 5px;
    span {
      display: block;
      line-height: 1.1;
    }
  }

  dd {
    margin: 0;
  }
`
export const Total = styled.dd`
  color: var(--color-pink);
  font-weight: 700;
`

export const Summary = styled.div`
  font-weight: 700;
`
