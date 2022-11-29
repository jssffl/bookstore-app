import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const PromotionBannerWrap = styled.div`
  height: 40px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  width: 300px;

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

  a:hover,
  a:active,
  a:visited {
    color: #fff;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    position: relative;
    transform: translateX(0);
    left: 0;
    padding: 0;
    background: #001950cc;
  }
`

export const PrimaryBanner = styled(Link)`
  background-image: linear-gradient(
    110deg,
    var(--color-primary) 0%,
    var(--color-primary) 100%
  );
  width: 35%;

  clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);

  @media screen and (max-width: 900px) {
    clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    clip-path: polygon(0 0, 100% 0, 90% 100%, 0 100%);
    width: 50%;
  }
`
export const SecondaryBanner = styled(Link)`
  width: 65%;

  img {
    width: 30px;
    margin-right: 10px;
    display: block;
  }

  span {
    display: block;
    font-size: 10px;
    font-weight: 400;
  }

  @media screen and (max-width: 900px) {
    width: 50%;
  }
`
