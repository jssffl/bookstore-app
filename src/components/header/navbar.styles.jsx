import styled from 'styled-components/macro'

export const NavBarWrap = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
  }
`
export const Burger = styled.button`
  width: 21px;
  height: 21px;
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: transparent;
  z-index: 1000;
  transform: ${({ open }) => (open ? 'translateX(250px)' : 'translateX(0)')};
  cursor: pointer;
  transition: all 0.3s ease-in-out;

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

export const Menu = styled.div`
  background-color: #f0f0f0;
  width: 250px;
  height: 100%;
  font-size: 14px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  z-index: 1000;
  transform: ${({ open }) => (open ? 'translateX(0);' : 'translateX(-100%);')};
  color: var(--color-grey-dark);
  box-shadow: ${({ open }) =>
    open ? ' 2px 3px 5px 0px rgb(0, 0, 0, 75%)' : 'none'};
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
