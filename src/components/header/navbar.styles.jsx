import styled from 'styled-components/macro'
import chevronUp from '../../assets/chevron-small-up.svg'
import chevronDown from '../../assets/chevron-small-down.svg'

const baseList = `
display: inline-block;
    height: 40px;
    line-height: 40px;
    width:100%;
    padding: 0 20px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
`
const show = `
    opacity: 1;
    transform: scale(1,1);
    position: relative;
`
const hide = `
    opacity: 0;
    transform: scale(0,1);
    position: absolute;
`

export const Burger = styled.button`
  width: 21px;
  height: 21px;
  position: absolute;
  top: 40px;
  left: 40px;
  background-color: transparent;
  z-index: 999;
  transform: ${({ open }) => (open ? 'translateX(240px)' : 'translateX(0)')};
  cursor: pointer;

  span {
    position: absolute;
    top: 3px;
    transform-origin: left top;
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};

    &,
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0px;
      width: 21px;
      height: 3px;
      background-color: #fff;
      border-radius: 10px;

      transition: all 0.3s ease-in-out;
    }

    &::before {
      top: 6px;
      opacity: ${({ open }) => (open ? '0' : '1')};
    }
    &::after {
      top: ${({ open }) => (open ? '0' : '12px')};

      transform: ${({ open }) => (open ? 'rotate(-90deg)' : 'rotate(0)')};
    }
  }
`
export const Dropdown = styled.ul`
  ${hide}
`

export const ToggleLabel = styled.label`
  position: relative;
  ${baseList}

  ::after {
    content: '';
    line-height: inherit;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    height: 20px;
    width: 20px;
    background: url(${chevronDown}) right center no-repeat;
  }
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  width: 250px;
  min-height: 100vh;
  font-size: 14px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  box-shadow: 2px 3px 5px 0px rgb(0, 0, 0, 75%);
  z-index: 998;
  transform: ${({ open }) => (open ? 'translateX(0);' : 'translateX(-100%);')};

  a {
    ${baseList}
  }

  input:checked ~ ${Dropdown} {
    ${show}
  }

  input:checked ~ ${ToggleLabel}::after {
    background: url(${chevronUp}) right center no-repeat;
  }

  input {
    display: none;
  }
`

export const MenuButton = styled.button`
  display: inline;
  width: 50%;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #f0f0f0;
  background: ${({ active }) => (active ? 'var(--color-blue-dark)' : '#fff')};
  color: ${({ active }) => (active ? '#fff' : 'inherit')};
`

export const ShopMenu = styled.ul`
  ${({ active }) => (active ? show : hide)};
`
export const AccountMenu = styled.ul`
  ${({ active }) => (active ? show : hide)};
`
