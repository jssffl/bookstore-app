import styled from 'styled-components'

export const CartIconContainer = styled.div`
  width: 40px;
  height: 44px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px;
  color: #d0d0d0;

  img {
    width: 27px;
    height: 27px;

    filter: invert(88%) sepia(0%) saturate(77%) hue-rotate(277deg)
      brightness(101%) contrast(90%);
  }

  &:hover {
    transform: scale(1.05);

    img {
      filter: invert(100%) sepia(3%) saturate(12%) hue-rotate(103deg)
        brightness(105%) contrast(105%);
    }
    span {
      color: #fff;
    }
  }
`

export const ItemCount = styled.span`
  color: #d0d0d0;
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  top: 45%;
`
