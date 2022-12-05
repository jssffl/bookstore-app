import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

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

  &:hover {
    color: #fff;
  }
`
export const SecondaryBanner = styled(Link)`
  width: 65%;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    display: block;
  }

  span {
    display: block;
    font-size: 10px;
    font-weight: 400;
  }

  p:hover,
  span:hover {
    color: #fff;
  }
  @media screen and (max-width: 900px) {
    width: 50%;
  }
`
