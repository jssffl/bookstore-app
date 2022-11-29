import styled from 'styled-components/macro'
import chevronUpIcon from '../../assets/chevron-small-up.svg'
import chevronDownIcon from '../../assets/chevron-small-down.svg'

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
const chevronDown = `&::after{ background: url(${chevronDownIcon}) right center no-repeat}`
const chevronUp = `&::after{ background: url(${chevronUpIcon}) right center no-repeat}`

export const ToggleDropDown = styled.span`
  ${({ hover }) => (hover ? chevronUp : chevronDown)};
`
export const Dropdown = styled.ul`
  ${({ hover }) => (hover ? show : hide)};

  @media screen and (max-width: 900px) {
    ${show}
  }
`
export const ToggleSubDropdown = styled.span`
  @media screen and (max-width: 900px) {
    ${({ active }) => (active ? chevronUp : chevronDown)}
  }
`
export const SubDropdown = styled.ul`
  @media screen and (max-width: 900px) {
    ${({ open }) => (open ? show : hide)};
  }
`

export const ShopMenu = styled.ul`
  display: flex;
  text-transform: capitalize;

  > li:first-child {
    display: none;
  }

  > li > a {
    margin: 0 15px;

    &:hover {
      border-bottom: 2px solid #000;
    }
  }

  > li > span {
    margin: 0 40px 0 10px;

    &:hover {
      border-bottom: 2px solid #000;
    }
  }

  span,
  a {
    display: inline-block;
    line-height: 40px;
    height: 40px;
    padding: 0;
    cursor: pointer;
  }

  ${ToggleDropDown} {
    position: relative;

    &::after {
      width: 20px;
      height: 20px;
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(30px, -50%);
    }
  }

  ${Dropdown} {
    width: 480px;
    height: 200px;
    position: absolute;
    top: 100%;
    left: 20px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-top: 5px solid var(--color-primary);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    z-index: 999;
    padding: 15px 0;
    display: flex;

    > li {
      &:nth-child(1) {
        width: 140px;
      }

      &:nth-child(2) {
        width: 160px;
      }
      &:nth-child(3) {
        flex: 1;
      }

      &:not(:last-child) {
        border-right: 1px solid #cacaca;
      }
    }
  }

  ${ToggleSubDropdown} {
    line-height: 25px;
    height: 25px;
    padding: 0;
    font-size: 14px;
    font-weight: 700;
    border-bottom: 1px solid #cacaca;
    margin: 0 0 5px 10px;
  }

  ${SubDropdown} {
    font-size: 13px;

    a {
      width: 100%;
      padding: 0;
      padding-left: 10px;
      line-height: 25px;
      height: 25px;
      font-size: 14px;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }

  @media screen and (max-width: 900px) {
    display: block;

    > li:first-child {
      display: block;
    }

    > li > a,
    > li > span,
    ${ToggleSubDropdown} {
      margin: 0;
    }

    span,
    a,
    ${ToggleSubDropdown}, ${SubDropdown} a {
      line-height: 40px;
      height: 40px;
      padding: 0 10px;
      background-color: #fff;
      width: 100%;

      border-bottom: 1px solid #f0f0f0;
    }

    ${ToggleSubDropdown} {
      font-size: 14px;
      font-weight: 400;
      margin: 0;
      position: relative;

      &::after {
        width: 20px;
        height: 20px;
        content: '';
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    ${ToggleDropDown} {
      display: none;
    }

    ${Dropdown} {
      width: 100%;
      height: auto;
      background-color: transparent;
      position: relative;
      top: 0;

      left: 0;
      border: none;
      box-shadow: none;
      padding: 0;
      display: inline-block;

      > li {
        &:nth-child(1),
        &:nth-child(2),
        &:nth-child(3) {
          width: 100%;
        }

        &:not(:last-child) {
          border-right: none;
        }
      }
    }

    ${SubDropdown} {
      a:hover {
        background-color: #fff;
      }
    }
  }
`
