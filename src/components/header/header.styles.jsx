import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'

import headerBg from '../../assets/header-bg.png'

export const fullContainer = `
  grid-column: full-start / full-end;
  height: 100%;
`

export const centerContainer = `
 max-width: 1440px;
 margin: 0 auto;
height: 100%;
padding: 0 10px;
`

export const flexContainer = `
  display: flex;
  align-items: center;
`

export const TheHeader = styled.header`
  ${fullContainer};

  height: 100%;
  font-size: 14px;
  background: url(${headerBg}) #001950 repeat;
  position: relative;

  display: grid;
  grid-template-rows: 44px 66px 40px;
`

export const PrimaryWrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
`
export const PrimaryContainer = styled.div`
  ${centerContainer}
  ${flexContainer}
  justify-content: space-between;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  padding: 5px;
  ${flexContainer};
  justify-content: center;

  img {
    height: 45px;
    width: 45px;
  }

  h1 {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-left: 10px;
  }

  @media screen and (max-width: 900px) {
    position: absolute;
    top: 0;
    left: 50%;
    height: auto;
    transform: translateX(-50%);

    img {
      width: 40px;
      height: 40px;
    }
  }
`

export const UserNavWrap = styled.div`
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25));
  color: #fff;
`
export const UserNavContainer = styled.div`
  ${centerContainer}
  display: flex;

  position: relative;

  @media screen and (max-width: 900px) {
    justify-content: flex-end;
  }
`
export const DeskWrap = styled.div`
  flex: 1;

  @media screen and (max-width: 900px) {
    display: none;
  }
`
export const ShopNavWrap = styled.div`
  width: 100%;
  background-color: #fff;

  @media screen and (max-width: 900px) {
    display: none;
  }
`

export const ShopNavContainer = styled.div`
  ${centerContainer}
`

export const PromotionBannerWrap = styled.div`
  height: 44px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  width: 300px;
  display: flex;

  > * {
    height: 100%;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 12px;
    cursor: pointer;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 900px) {
    ${centerContainer};
    width: 100%;
    position: relative;
    transform: translateX(0);
    left: 0;
    padding: 0;
    background: #001950cc;
  }
`
